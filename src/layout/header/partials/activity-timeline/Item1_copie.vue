<template>
    <!--begin::List Widget 5-->
    <div class="card" :class="widgetClasses">
        <!--begin::Header-->
        <div class="mt-7">
            <div>
                <!--begin::Timeline heading-->
                <div class="pe-3 mb-5">
                    <!--begin::Title-->
                    <div class="fs-5 fw-bold mb-2">
                        <div
                            class="timeline-icon symbol symbol-circle symbol-40px me-4"
                        >
                            <div class="symbol-label bg-light">
                                <span>
                                    <inline-svg
                                        src="media/icons/duotune/communication/com004.svg"
                                    />
                                </span>
                            </div>
                        </div>
                        Il y a 4 nouvelles alertes de sécurité pour vous au sein
                        de votre infrastructure :
                    </div>
                    <!--end::Title-->

                    <!--begin::Description-->
                    <div class="d-flex align-items-center mt-1 fs-6">
                        <!--begin::Info-->
                        <div class="text-muted me-2 fs-7">
                            Dernière alerte à 4:23 PM
                        </div>
                        <!--end::Info-->
                    </div>
                    <!--end::Description-->
                </div>
                <!--end::Timeline heading-->

                <!--begin::Timeline details-->
                <div class="overflow-auto pb-5">
                    <!--begin::Record-->
                    <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                    >
                        <!--begin::Title-->
                        <a
                            href="#"
                            class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                            >Spanning-tree DOS Attack</a
                        >
                        <!--end::Title-->

                        <!--begin::Time-->
                        <div class="min-w-175px pe-2">
                            <span class="badge badge-light text-muted"
                                >4:23 PM</span
                            >
                        </div>
                        <!--end::Time-->
                        <!--begin::Label-->
                        <div class="min-w-175px pe-2">
                            <span class="badge badge-light text-muted"
                                >Vulnérabilité réseau</span
                            >
                        </div>
                        <!--end::Label-->

                        <!--begin::Users-->
                        <div
                            class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        >
                            <!--begin::User-->
                            <div class="symbol symbol-circle symbol-40px">
                                <img src="media/avatars/Switch.png" alt="img" />
                            </div>
                            <!--end::User-->
                        </div>
                        <!--end::Users-->

                        <!--begin::Progress-->
                        <div class="min-w-125px pe-2">
                            <span class="badge badge-light-primary"
                                >En cours</span
                            >
                        </div>
                        <!--end::Progress-->

                        <!--begin::Action-->
                        <a
                            href="#"
                            class="btn btn-sm btn-light btn-active-light-primary"
                            >Détails</a
                        >
                        <!--end::Action-->
                    </div>
                    <!--end::Record-->

                    <!--begin::Record-->
                    <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0"
                    >
                        <!--begin::Title-->
                        <a
                            href="#"
                            class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                            >Réponse à l'incident STP DOS
                        </a>
                        <!--end::Title-->
                        <!--begin::Time-->
                        <div class="min-w-175px pe-2">
                            <span class="badge badge-light text-muted"
                                >4:24 PM</span
                            >
                        </div>
                        <!--end::Time-->

                        <!--begin::Label-->
                        <div class="min-w-175px">
                            <span class="badge badge-light text-muted"
                                >Vulnérabilité réseau
                            </span>
                        </div>
                        <!--end::Label-->

                        <!--begin::Users-->
                        <div
                            class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px"
                        >
                            <!--begin::User-->
                            <div class="symbol symbol-circle symbol-40px">
                                <img src="media/avatars/Switch.png" alt="img" />
                            </div>
                            <!--end::User-->
                        </div>
                        <!--end::Users-->

                        <!--begin::Progress-->
                        <div class="min-w-125px">
                            <span class="badge badge-light-success"
                                >Terminé</span
                            >
                        </div>
                        <!--end::Progress-->

                        <!--begin::Action-->
                        <a
                            href="#"
                            class="btn btn-sm btn-light btn-active-light-primary"
                            >Détails</a
                        >
                        <!--end::Action-->
                    </div>
                    <!--end::Record-->
                </div>
                <!--end::Timeline details-->
                <!--begin::Timeline details-->
                <div class="overflow-auto pb-5">
                    <!--begin::Record-->
                    <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                    >
                        <!--begin::Title-->
                        <a
                            href="#"
                            class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                            >HSRP Active Router Attack</a
                        >
                        <!--end::Title-->

                        <div class="min-w-175px pe-2">
                            <span class="badge badge-light text-muted"
                                >4:24 PM</span
                            >
                        </div>

                        <!--begin::Label-->
                        <div class="min-w-175px pe-2">
                            <span class="badge badge-light text-muted"
                                >Vulnérabilité réseau</span
                            >
                        </div>
                        <!--end::Label-->

                        <!--begin::Users-->
                        <div
                            class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                        >
                            <!--begin::User-->
                            <div class="symbol symbol-circle symbol-40px">
                                <img src="media/avatars/router.png" alt="img" />
                            </div>
                            <!--end::User-->
                        </div>
                        <!--end::Users-->

                        <!--begin::Progress-->
                        <div class="min-w-125px pe-2">
                            <span class="badge badge-light-primary"
                                >En cours</span
                            >
                        </div>
                        <!--end::Progress-->
                        <!--begin::pdf-->
                        <div class="d-flex flex-aligns-center pe-10 pe-lg-20">
                            <!--begin::Icon-->
                            <img
                                alt=""
                                class="w-30px me-3"
                                src="media/svg/files/pdf.svg"
                            />
                            <!--end::Icon-->

                            <!--begin::Info-->
                            <div class="ms-1 fw-bold">
                                <!--begin::Desc-->
                                <a
                                    href="#"
                                    class="fs-6 text-hover-primary fw-bolder"
                                    >HSRP</a
                                >
                                <!--end::Desc-->

                                <!--begin::Number-->
                                <div class="text-gray-400">1.9mb</div>
                                <!--end::Number-->
                            </div>
                            <!--begin::Info-->
                        </div>
                        <!--end::pdf-->
                    </div>
                    <!--end::Record-->

                    <!--begin::Record-->
                    <div
                        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0"
                    >
                        <!--begin::Title-->
                        <a
                            href="#"
                            class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                            >Réponse à l'incident HSRP Attack
                        </a>
                        <!--end::Title-->
                        <div class="min-w-175px pe-2">
                            <span class="badge badge-light text-muted"
                                >4:24 PM</span
                            >
                        </div>
                        <!--begin::Label-->
                        <div class="min-w-175px">
                            <span class="badge badge-light text-muted"
                                >Vulnérabilité réseau
                            </span>
                        </div>
                        <!--end::Label-->

                        <!--begin::Users-->
                        <div
                            class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px"
                        >
                            <!--begin::User-->
                            <div class="symbol symbol-circle symbol-40px">
                                <img src="media/avatars/router.png" alt="img" />
                            </div>
                            <!--end::User-->
                        </div>
                        <!--end::Users-->

                        <!--begin::Progress-->
                        <div class="min-w-125px">
                            <span class="badge badge-light-success"
                                >Terminé</span
                            >
                        </div>
                        <!--end::Progress-->
                        <!--begin::Item-->
                        <div class="d-flex flex-aligns-center pe-10 pe-lg-20">
                            <!--begin::Icon-->
                            <img
                                alt=""
                                class="w-30px me-3"
                                src="media/svg/files/pdf.svg"
                            />
                            <!--end::Icon-->

                            <!--begin::Info-->
                            <div class="ms-1 fw-bold">
                                <!--begin::Desc-->
                                <a
                                    href="#"
                                    class="fs-6 text-hover-primary fw-bolder"
                                    >HSRP</a
                                >
                                <!--end::Desc-->

                                <!--begin::Number-->
                                <div class="text-gray-400">1.9mb</div>
                                <!--end::Number-->
                            </div>
                            <!--begin::Info-->
                        </div>
                        <!--end::Item-->
                    </div>
                    <!--end::Record-->
                </div>
                <!--end::Timeline details-->
            </div>
        </div>
        <!--end: Card Body-->
    </div>
    <!--end: List Widget 5-->
</template>
