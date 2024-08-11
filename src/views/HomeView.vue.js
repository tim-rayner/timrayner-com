import HomeSection from '@/components/organisms/HomeSection.vue';
import AboutSection from '@/components/organisms/AboutSection.vue';
import ProjectsSection from '@/components/organisms/ProjectsSection.vue';
import ContactSection from '@/components/organisms/ContactSection.vue';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-12") }, });
    // @ts-ignore
    [HomeSection,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HomeSection, new HomeSection({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(HomeSection, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-12") }, });
    // @ts-ignore
    [AboutSection,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(AboutSection, new AboutSection({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(AboutSection, __VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-12") }, });
    // @ts-ignore
    [ProjectsSection,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ProjectsSection, new ProjectsSection({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ProjectsSection, __VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-12") }, });
    // @ts-ignore
    [ContactSection,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(ContactSection, new ContactSection({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ContactSection, __VLS_16));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mb-12'];
        __VLS_styleScopedClasses['my-12'];
        __VLS_styleScopedClasses['my-12'];
        __VLS_styleScopedClasses['my-12'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                HomeSection: HomeSection,
                AboutSection: AboutSection,
                ProjectsSection: ProjectsSection,
                ContactSection: ContactSection,
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
