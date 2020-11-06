<?php

namespace GreensIntl\Exceptions;

use Exception;
use GreensIntl\License;

class InvalidLicenseException extends Exception
{
    protected $message;

    public function __construct($message)
    {
        $this->message = $message;

        resolve(License::class)->deleteLicenseFile();
    }

    public function render()
    {
        return redirect()->route('license.create')
            ->with('error', $this->message);
    }
}
