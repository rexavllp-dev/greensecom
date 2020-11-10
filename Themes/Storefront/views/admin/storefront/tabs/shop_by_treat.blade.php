<div class="row">
    <div class="col-md-8">
        {{ Form::checkbox('storefront_shop_by_treat_section_enabled', trans('storefront::attributes.section_status'), trans('storefront::storefront.form.enable_shop_by_treat_section'), $errors, $settings) }}
        {{ Form::select('storefront_shop_by_treat', trans('storefront::attributes.storefront_shop_by_treat'), $errors, $treats, setting(), ['class' => 'selectize prevent-creation', 'multiple' => true]) }}
    </div>
</div>
