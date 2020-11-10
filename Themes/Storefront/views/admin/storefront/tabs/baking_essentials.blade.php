

<div class="row">
    <div class="col-md-8">
        {{ Form::checkbox('storefront_baking_essentials_section_enabled', trans('storefront::attributes.section_status'), trans('storefront::storefront.form.enable_baking_essentials_section'), $errors, $settings) }}
        {{ Form::select('storefront_baking_essentials', trans('storefront::attributes.storefront_baking_essentials'), $errors, $treats, setting(), ['class' => 'selectize prevent-creation', 'multiple' => true]) }}
    </div>
</div>
