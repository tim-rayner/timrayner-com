import ContactPill from '@/components/atoms/ContactPill.vue';
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("contact"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-between") }, });
    // @ts-ignore
    [ContactPill,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ContactPill, new ContactPill({ icon: ((__VLS_ctx.faEnvelope)), label: ("tim@timrayner.com"), }));
    const __VLS_1 = __VLS_0({ icon: ((__VLS_ctx.faEnvelope)), label: ("tim@timrayner.com"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ icon: ((__VLS_ctx.faEnvelope)), label: ("tim@timrayner.com"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ContactPill, __VLS_1));
    // @ts-ignore
    [faEnvelope,];
    // @ts-ignore
    [ContactPill,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ContactPill, new ContactPill({ icon: ((__VLS_ctx.faPhone)), label: ("07512 282 997"), }));
    const __VLS_6 = __VLS_5({ icon: ((__VLS_ctx.faPhone)), label: ("07512 282 997"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ icon: ((__VLS_ctx.faPhone)), label: ("07512 282 997"), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ContactPill, __VLS_6));
    // @ts-ignore
    [faPhone,];
    // @ts-ignore
    [ContactPill,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ContactPill, new ContactPill({ icon: ((__VLS_ctx.faLocationPin)), label: ("Norfolk, United Kingdom"), }));
    const __VLS_11 = __VLS_10({ icon: ((__VLS_ctx.faLocationPin)), label: ("Norfolk, United Kingdom"), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({ icon: ((__VLS_ctx.faLocationPin)), label: ("Norfolk, United Kingdom"), }));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ContactPill, __VLS_11));
    // @ts-ignore
    [faLocationPin,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['content-between'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ContactPill: ContactPill,
                faEnvelope: faEnvelope,
                faPhone: faPhone,
                faLocationPin: faLocationPin,
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
