<?php

namespace GreensIntl\Http\Controllers;

use Exception;
use GreensIntl\Install\App;
use GreensIntl\Install\Store;
use GreensIntl\Install\Database;
use GreensIntl\Install\Requirement;
use Illuminate\Routing\Controller;
use GreensIntl\Install\AdminAccount;
use GreensIntl\Http\Requests\InstallRequest;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use GreensIntl\Http\Middleware\RedirectIfInstalled;

class InstallController extends Controller
{
    public function __construct()
    {
        $this->middleware(RedirectIfInstalled::class);
    }

    public function preInstallation(Requirement $requirement)
    {
        return view('install.pre_installation', compact('requirement'));
    }

    public function getConfiguration(Requirement $requirement)
    {
        if (! $requirement->satisfied()) {
            return redirect()->route('install.pre_installation');
        }

        return view('install.configuration', compact('requirement'));
    }

    public function postConfiguration(
        InstallRequest $request,
        Database $database,
        AdminAccount $admin,
        Store $store,
        App $app
    ) {
        @set_time_limit(0);

        try {
            $database->setup($request->db);
            $admin->setup($request->admin);
            $store->setup($request->store);
            $app->setup();
        } catch (Exception $e) {
            return back()->withInput()
                ->with('error', $e->getMessage());
        }

        return redirect('install/complete');
    }

    public function complete()
    {
        if (config('app.installed')) {
            return redirect()->route('home');
        }

        DotenvEditor::setKey('APP_INSTALLED', 'true')->save();

        return view('install.complete');
    }
}
