<?php

namespace GreensIntl\Scripts;

use GreensIntl\GreensIntl;
use Illuminate\Support\Facades\DB;

class V2_0_0
{
    public function run()
    {
        if (version_compare(GreensIntl::VERSION, '2.0.0', '=')) {
            DB::delete("DELETE FROM `settings` WHERE `key` LIKE 'storefront_%' AND NOT `key` = 'storefront_copyright_text'");
            DB::delete("DELETE FROM `translations` WHERE `key` LIKE 'storefront::%'");
        }
    }
}
