const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const { icon, label } = defineProps();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center content-center text-[#6366f1] bg-[#171b27] py-1 px-6 my-3 text-xs rounded-2xl w-fit cursor-pointer") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .FontAwesomeIcon;
    ({}.FontAwesomeIcon);
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((__VLS_ctx.icon)), ...{ class: ("p-2") }, }));
    const __VLS_2 = __VLS_1({ icon: ((__VLS_ctx.icon)), ...{ class: ("p-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ icon: ((__VLS_ctx.icon)), ...{ class: ("p-2") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [icon,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.label);
    // @ts-ignore
    [label,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['content-center'];
        __VLS_styleScopedClasses['text-[#6366f1]'];
        __VLS_styleScopedClasses['bg-[#171b27]'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['my-3'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['w-fit'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['p-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                icon: icon,
                label: label,
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
