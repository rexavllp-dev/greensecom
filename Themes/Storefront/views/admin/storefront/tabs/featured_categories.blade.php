<div class="row">
    <div class="col-md-8">
        {{ Form::checkbox('storefront_featured_categories_section_enabled', trans('storefront::attributes.section_status'), trans('storefront::storefront.form.enable_featured_categories_section'), $errors, $settings) }}
        {{ Form::text('translatable[storefront_featured_categories_section_title]', trans('storefront::attributes.section_title'), $errors, $settings) }}
        {{ Form::text('translatable[storefront_featured_categories_section_subtitle]', trans('storefront::attributes.section_subtitle'), $errors, $settings) }}

        <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_1') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_1_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

        
        </div>

        <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_2') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_2_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

        
        </div>

        <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_3') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_3_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

         
        </div>

        <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_4') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_4_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

         
        </div>

        <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_5') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_5_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

         
        </div>

        <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_6') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_6_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

        
        </div>

           <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_7') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_7_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

        
        </div>

           <div class="box-content clearfix">
            <h4 class="section-title">{{ trans('storefront::storefront.form.category_8') }}</h4>

            {{ Form::select('storefront_featured_categories_section_category_8_category_id', trans('storefront::attributes.category'), $errors, $categories, $settings) }}

        
        </div>
    </div>
</div>
