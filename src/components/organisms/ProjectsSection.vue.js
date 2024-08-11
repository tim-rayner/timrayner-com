import { ref } from 'vue';
import ProjectCarousel from '../molecules/ProjectCarousel.vue';
import { ShowcaseProjects } from '@/constants/HomeConstants';
import { useUser, useRepos, useCommits } from '@/composables/useGithubApi';
import MoreProjects from '../molecules/MoreProjects.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const username = ref('tim-rayner');
const reposQuery = useRepos(username.value);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("projects"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-projects mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("my-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    // @ts-ignore
    [ProjectCarousel,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ProjectCarousel, new ProjectCarousel({ projects: ((__VLS_ctx.ShowcaseProjects)), }));
    const __VLS_1 = __VLS_0({ projects: ((__VLS_ctx.ShowcaseProjects)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ projects: ((__VLS_ctx.ShowcaseProjects)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ProjectCarousel, __VLS_1));
    // @ts-ignore
    [ShowcaseProjects,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("more-projects") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("my-2 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: (""), ...{ class: ("link text-[#6366f1] underline") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-[200px]") }, });
    if (__VLS_ctx.reposQuery.data.value) {
        // @ts-ignore
        [MoreProjects,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(MoreProjects, new MoreProjects({ projects: ((__VLS_ctx.reposQuery.data.value)), }));
        const __VLS_6 = __VLS_5({ projects: ((__VLS_ctx.reposQuery.data.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        ({}({ projects: ((__VLS_ctx.reposQuery.data.value)), }));
        const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(MoreProjects, __VLS_6));
        // @ts-ignore
        [reposQuery, reposQuery,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['main-projects'];
        __VLS_styleScopedClasses['mb-12'];
        __VLS_styleScopedClasses['my-2'];
        __VLS_styleScopedClasses['more-projects'];
        __VLS_styleScopedClasses['my-2'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['link'];
        __VLS_styleScopedClasses['text-[#6366f1]'];
        __VLS_styleScopedClasses['underline'];
        __VLS_styleScopedClasses['min-h-[200px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ProjectCarousel: ProjectCarousel,
                ShowcaseProjects: ShowcaseProjects,
                MoreProjects: MoreProjects,
                reposQuery: reposQuery,
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
