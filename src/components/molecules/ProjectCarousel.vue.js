import Pill from '../atoms/Pill.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const { projects } = defineProps();
import { register } from 'swiper/element/bundle';
register();
const spaceBetween = 10;
const onProgress = (e) => {
    const [swiper, progress] = e.detail;
};
const onSlideChange = (e) => { };
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .SwiperContainer;
    ({}.SwiperContainer);
    ({}.SwiperContainer);
    __VLS_components.SwiperContainer;
    __VLS_components.swiperContainer;
    __VLS_components.SwiperContainer;
    __VLS_components.swiperContainer;
    // @ts-ignore
    [SwiperContainer, SwiperContainer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSwiperprogress': {} }, ...{ 'onSwiperslidechange': {} }, spaceBetween: ((__VLS_ctx.spaceBetween)), loop: ((true)), pagination: ((true)), breakpoints: (({
            768: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        })), ...{ class: ("pt-6") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSwiperprogress': {} }, ...{ 'onSwiperslidechange': {} }, spaceBetween: ((__VLS_ctx.spaceBetween)), loop: ((true)), pagination: ((true)), breakpoints: (({
            768: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        })), ...{ class: ("pt-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSwiperprogress': {} }, ...{ 'onSwiperslidechange': {} }, spaceBetween: ((__VLS_ctx.spaceBetween)), loop: ((true)), pagination: ((true)), breakpoints: (({
            768: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        })), ...{ class: ("pt-6") }, }));
    let __VLS_6;
    const __VLS_7 = {
        onSwiperprogress: (__VLS_ctx.onProgress)
    };
    const __VLS_8 = {
        onSwiperslidechange: (__VLS_ctx.onSlideChange)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
        // @ts-ignore
        const __VLS_9 = {}
            .SwiperSlide;
        ({}.SwiperSlide);
        ({}.SwiperSlide);
        __VLS_components.SwiperSlide;
        __VLS_components.swiperSlide;
        __VLS_components.SwiperSlide;
        __VLS_components.swiperSlide;
        // @ts-ignore
        [SwiperSlide, SwiperSlide,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ key: ((project.link)), ...{ class: ("!h-auto mb-12") }, }));
        const __VLS_11 = __VLS_10({ key: ((project.link)), ...{ class: ("!h-auto mb-12") }, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        ({}({ key: ((project.link)), ...{ class: ("!h-auto mb-12") }, }));
        const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-[#15181f] h-full mx-auto rounded-2xl p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col my-auto") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (project.title);
        // @ts-ignore
        [spaceBetween, onProgress, onSlideChange, projects,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("!text-[#a8b1c0]") }, });
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pills-container flex flex-wrap mt-2") }, });
        for (const [tech] of __VLS_getVForSourceType((project.technologies))) {
            // @ts-ignore
            [Pill, Pill,];
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(Pill, new Pill({ key: ((tech)), }));
            const __VLS_16 = __VLS_15({ key: ((tech)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
            ({}({ key: ((tech)), }));
            const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Pill, __VLS_16));
            (tech);
            __VLS_nonNullable(__VLS_19.slots).default;
        }
        __VLS_nonNullable(__VLS_14.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['pt-6'];
        __VLS_styleScopedClasses['!h-auto'];
        __VLS_styleScopedClasses['mb-12'];
        __VLS_styleScopedClasses['bg-[#15181f]'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['my-auto'];
        __VLS_styleScopedClasses['!text-[#a8b1c0]'];
        __VLS_styleScopedClasses['pills-container'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mt-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Pill: Pill,
                projects: projects,
                spaceBetween: spaceBetween,
                onProgress: onProgress,
                onSlideChange: onSlideChange,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
