<template>
    <div class="row g-5 g-xxl-8">
        <div class="card">
            <div class="mt-7">
                <div>
                    <div class="pe-3 mb-5">
                        <div class="fs-5 fw-bold mb-2">
                            <div
                                class="timeline-icon symbol symbol-circle symbol-40px me-4"
                            >
                                <div class="symbol-label bg-light">
                                    <span>
                                        <inline-svg
                                            src="/media/icons/duotune/communication/com004.svg"
                                        />
                                    </span>
                                </div>
                            </div>
                            Nouvelles alertes de sécurité pour vous au sein de
                            votre infrastructure :
                        </div>
                    </div>
                    <div
                        class="overflow-auto pb-5"
                        :style="{ height: '670px' }"
                    >
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
export default defineComponent({
    name: "Attack-layout",
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
