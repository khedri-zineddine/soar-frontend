<template>
    <div class="row g-5 g-xxl-8">
        <KTWidget5 widget-classes="mb-5 mb-xxl-8"></KTWidget5>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTWidget5 from "@/layout/header/partials/activity-timeline/Item1_copie.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "profile-overview",
    components: {
        KTWidget5,
    },
    setup() {
        onMounted(() => {
            setCurrentPageBreadcrumbs("Rapports des Incidents de Sécurité", [
                "Alerte",
                "Réponse",
            ]);
        });
    },
});
</script>
