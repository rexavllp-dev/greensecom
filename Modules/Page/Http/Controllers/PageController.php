<?php

namespace Modules\Page\Http\Controllers;

use Modules\Media\Entities\File;
use Modules\Page\Entities\Page;

class PageController {
	/**
	 * Display page for the slug.
	 *
	 * @param string $slug
	 * @return \Illuminate\Http\Response
	 */
	public function show($slug) {
		$logo = File::findOrNew(setting('storefront_header_logo'))->path;
		$page = Page::where('slug', $slug)->firstOrFail();

		return view('public.pages.show', compact('page', 'logo'));
	}
	public function about_us() {
		$logo = File::findOrNew(setting('storefront_header_logo'))->path;

		return view('public.pages.about-us', compact('logo'));
	}

}
