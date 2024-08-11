import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center md:text-left") }, id: ("home"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-6xl my-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-xl mx-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/tim-rayner"), target: ("_blank"), rel: ("noopener noreferrer"), });
    // @ts-ignore
    const __VLS_0 = {}
        .FontAwesomeIcon;
    ({}.FontAwesomeIcon);
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((__VLS_ctx.faGithub)), ...{ class: ("h-6 mt-6 mr-4 text-[#727c8d]") }, }));
    const __VLS_2 = __VLS_1({ icon: ((__VLS_ctx.faGithub)), ...{ class: ("h-6 mt-6 mr-4 text-[#727c8d]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ icon: ((__VLS_ctx.faGithub)), ...{ class: ("h-6 mt-6 mr-4 text-[#727c8d]") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [faGithub,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://linkedin.com/in/tim-rayner"), target: ("_blank"), rel: ("noopener noreferrer"), });
    // @ts-ignore
    const __VLS_6 = {}
        .FontAwesomeIcon;
    ({}.FontAwesomeIcon);
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((__VLS_ctx.faLinkedin)), ...{ class: ("h-6 mt-6 mr-4 text-[#727c8d]") }, }));
    const __VLS_8 = __VLS_7({ icon: ((__VLS_ctx.faLinkedin)), ...{ class: ("h-6 mt-6 mr-4 text-[#727c8d]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ icon: ((__VLS_ctx.faLinkedin)), ...{ class: ("h-6 mt-6 mr-4 text-[#727c8d]") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [faLinkedin,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['md:text-left'];
        __VLS_styleScopedClasses['text-6xl'];
        __VLS_styleScopedClasses['my-2'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['mx-2'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['mr-4'];
        __VLS_styleScopedClasses['text-[#727c8d]'];
        __VLS_styleScopedClasses['h-6'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['mr-4'];
        __VLS_styleScopedClasses['text-[#727c8d]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                faGithub: faGithub,
                faLinkedin: faLinkedin,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
