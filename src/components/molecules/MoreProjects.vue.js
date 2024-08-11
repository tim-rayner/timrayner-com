import Pill from '../atoms/Pill.vue';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Button from 'primevue/button';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const { projects } = defineProps();
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const isToday = date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    const isYesterday = date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear();
    if (isToday) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `Today at ${hours}:${minutes}`;
    }
    else if (isYesterday) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `Yesterday at ${hours}:${minutes}`;
    }
    else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
};
const shownProjects = ref(projects.slice(0, 3));
const projectsToggled = ref(false);
const toggleMore = () => {
    if (shownProjects.value.length === projects.length) {
        shownProjects.value = projects.slice(0, 3);
    }
    else {
        shownProjects.value = projects;
        projectsToggled.value = true;
    }
};
const handleRedirect = (url) => {
    window.open(url, '_blank');
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col") }, });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.shownProjects))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleRedirect(project.html_url);
                    // @ts-ignore
                    [shownProjects, handleRedirect,];
                } }, key: ((project.id)), ...{ class: ("bg-[#15181f] mb-6 p-4 rounded-lg w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("font-semibold text-white") }, });
        (project.name);
        // @ts-ignore
        const __VLS_0 = {}
            .FontAwesomeIcon;
        ({}.FontAwesomeIcon);
        __VLS_components.FontAwesomeIcon;
        __VLS_components.fontAwesomeIcon;
        // @ts-ignore
        [FontAwesomeIcon,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((__VLS_ctx.faArrowRightFromBracket)), ...{ class: ("text-[#6366f1] ml-auto") }, }));
        const __VLS_2 = __VLS_1({ icon: ((__VLS_ctx.faArrowRightFromBracket)), ...{ class: ("text-[#6366f1] ml-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ icon: ((__VLS_ctx.faArrowRightFromBracket)), ...{ class: ("text-[#6366f1] ml-auto") }, }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        // @ts-ignore
        [faArrowRightFromBracket,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("!text-[#a8b1c0]") }, });
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("!text-[#a8b1c0]") }, });
        (__VLS_ctx.formatDate(project.updated_at));
        // @ts-ignore
        [formatDate,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap mt-2 items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("!text-[#a8b1c0]") }, });
        // @ts-ignore
        [Pill, Pill,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(Pill, new Pill({ ...{ class: ("ml-2") }, }));
        const __VLS_7 = __VLS_6({ ...{ class: ("ml-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{ class: ("ml-2") }, }));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Pill, __VLS_7));
        (project.language);
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    if (!__VLS_ctx.projectsToggled) {
        // @ts-ignore
        const __VLS_11 = {}
            .Button;
        ({}.Button);
        __VLS_components.Button;
        // @ts-ignore
        [Button,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ ...{ 'onClick': {} }, label: ("load more"), ...{ class: ("mx-auto") }, }));
        const __VLS_13 = __VLS_12({ ...{ 'onClick': {} }, label: ("load more"), ...{ class: ("mx-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ ...{ 'onClick': {} }, label: ("load more"), ...{ class: ("mx-auto") }, }));
        let __VLS_17;
        const __VLS_18 = {
            onClick: (__VLS_ctx.toggleMore)
        };
        const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13));
        let __VLS_14;
        let __VLS_15;
        // @ts-ignore
        [projectsToggled, toggleMore,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['bg-[#15181f]'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-[#6366f1]'];
        __VLS_styleScopedClasses['ml-auto'];
        __VLS_styleScopedClasses['!text-[#a8b1c0]'];
        __VLS_styleScopedClasses['!text-[#a8b1c0]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['!text-[#a8b1c0]'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['mx-auto'];
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
                faArrowRightFromBracket: faArrowRightFromBracket,
                Button: Button,
                formatDate: formatDate,
                shownProjects: shownProjects,
                projectsToggled: projectsToggled,
                toggleMore: toggleMore,
                handleRedirect: handleRedirect,
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
