import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hasScrolled = ref(false);
const currentSection = ref('home');
const sections = ['home', 'about', 'projects', 'contact'];
const updateCurrentSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    // Check if the page is scrolled all the way to the top
    if (window.scrollY === 0) {
        currentSection.value = 'home';
        return;
    }
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element &&
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition) {
            currentSection.value = section;
            break;
        }
    }
};
const onScroll = () => {
    hasScrolled.value = window.scrollY > 0;
    updateCurrentSection();
};
onMounted(() => {
    window.addEventListener('scroll', onScroll);
    updateCurrentSection(); // Initial check
});
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("text-white px-6 py-3 rounded-3xl max-w-[375px] md:max-w-[600px] mx-auto mb-6 fixed top-6 left-0 right-0 z-10") }, ...{ class: (({ 'bg-[#292929] shadow-purple-500/10 ': __VLS_ctx.hasScrolled })) }, });
    __VLS_styleScopedClasses = ({ 'bg-[#292929] shadow-purple-500/10 ': hasScrolled });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'text-[#6366f1]': __VLS_ctx.currentSection === 'home' })) }, });
    __VLS_styleScopedClasses = ({ 'text-[#6366f1]': currentSection === 'home' });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("#home"), }));
    const __VLS_2 = __VLS_1({ to: ("#home"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("#home"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [hasScrolled, currentSection,];
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'text-[#6366f1]': __VLS_ctx.currentSection === 'about' })) }, });
    __VLS_styleScopedClasses = ({ 'text-[#6366f1]': currentSection === 'about' });
    // @ts-ignore
    const __VLS_6 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("#about"), }));
    const __VLS_8 = __VLS_7({ to: ("#about"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("#about"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [currentSection,];
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'text-[#6366f1]': __VLS_ctx.currentSection === 'projects' })) }, });
    __VLS_styleScopedClasses = ({ 'text-[#6366f1]': currentSection === 'projects' });
    // @ts-ignore
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("#projects"), }));
    const __VLS_14 = __VLS_13({ to: ("#projects"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("#projects"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    [currentSection,];
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'text-[#6366f1]': __VLS_ctx.currentSection === 'contact' })) }, });
    __VLS_styleScopedClasses = ({ 'text-[#6366f1]': currentSection === 'contact' });
    // @ts-ignore
    const __VLS_18 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("#contact"), }));
    const __VLS_20 = __VLS_19({ to: ("#contact"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ to: ("#contact"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    // @ts-ignore
    [currentSection,];
    __VLS_nonNullable(__VLS_23.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['rounded-3xl'];
        __VLS_styleScopedClasses['max-w-[375px]'];
        __VLS_styleScopedClasses['md:max-w-[600px]'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['top-6'];
        __VLS_styleScopedClasses['left-0'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                RouterLink: RouterLink,
                hasScrolled: hasScrolled,
                currentSection: currentSection,
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
