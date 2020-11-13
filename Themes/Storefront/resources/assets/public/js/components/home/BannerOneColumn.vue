<template>
<div>
    <div class="container">
        <div class="section_title">
            <h2  class="head-stripe">DEALS</h2>
        </div>
    </div>
    <div>
    
        
                        <a
                :href="banner.call_to_action_url"
                class="banner"
                :target="banner.open_in_new_window ? '_blank' : '_self'"
            >
                <img :src="banner.image.path" alt="banner">
            </a>
    </div>


</div>
</template>
<script>
    export default {
        props: ['banner'],
    };
</script>






















<!-- <template>
    <section class="banner-wrap one-column-banner">
        <div class="container">
            <a
                :href="banner.call_to_action_url"
                class="banner"
                :target="banner.open_in_new_window ? '_blank' : '_self'"
            >
                <img :src="banner.image.path" alt="banner">
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['banner'],
    };
</script> -->
