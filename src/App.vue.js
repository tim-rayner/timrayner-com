import { RouterView } from 'vue-router';
import Navbar from '@/components/molecules/Navbar.vue';
import Footer from '@/components/molecules/Footer.vue';
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    // @ts-ignore
    [Navbar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Navbar, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-20") }, id: ("top"), });
    // @ts-ignore
    const __VLS_5 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({}));
    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({}));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Footer, __VLS_12));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mt-20'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                RouterView: RouterView,
                Navbar: Navbar,
                Footer: Footer,
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
