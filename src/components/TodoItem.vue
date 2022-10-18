<template>
    <li class="todo" :class="{ 'todo--arhived': isArhived }">
        <IconBase class="todo__icon-template" />

        <label class="todo__wrapper">
            <input
                v-show="false"
                id="checkbox"
                class="todo__checkbox"
                type="checkbox"
                :checked="done"
                :disabled="isArhived"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 200 25"
                class="todo__icon icon"
            >
                <use xlink:href="#todo__line" class="icon__line"></use>
                <use xlink:href="#todo__box" class="icon__box"></use>
                <use xlink:href="#todo__check" class="icon__check"></use>
                <use xlink:href="#todo__circle" class="icon__circle"></use>
            </svg>
            <div class="todo__text">
                Do a very important task Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolor distinctio necessitatibus voluptatibus itaque! Fuga, eveniet accusamus ex
                maiores deserunt corporis?
            </div>
        </label>

        <div class="todo__buttons">
            <template v-if="!isArhived">
                <BaseButton class="button button--circle">
                    <IconView class="button__icon base-icon" width="24" height="24" />
                </BaseButton>
                <BaseButton class="button button--circle">
                    <IconArchive class="button__icon base-icon" width="24" height="24" />
                </BaseButton>
                <BaseButton class="button button--circle button--red">
                    <IconDelete class="button__icon base-icon" width="24" height="24" />
                </BaseButton>
            </template>

            <template v-else>
                <BaseButton class="button button--circle">
                    <IconView class="button__icon base-icon" width="24" height="24" />
                </BaseButton>
                <BaseButton class="button button--circle">
                    <IconArrowUp class="button__icon base-icon" width="24" height="24" />
                </BaseButton>
            </template>
        </div>
    </li>
</template>

<script setup lang="ts">
import IconBase from '@/components/icons/IconBase.vue'
import BaseButton from '@/components/BaseButton.vue'
import IconArchive from '@/components/icons/IconArchive.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconView from '@/components/icons/IconView.vue'

defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: '',
    },
    isArhived: {
        type: Boolean,
        default: false,
    },
    done: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="scss" scoped>
$duration: 0.8s;
.todo {
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--color-todolist-item);
    list-style: none;
    padding: 20px 20px;
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 8px;

    &--arhived {
        background-color: var(--color-todolist-item-arhived);
    }

    &:last-child {
        margin-bottom: 0;
    }

    &__icon-template {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    &__wrapper {
        display: flex;
        width: 74%;
        flex-grow: 1;
        align-items: center;
        position: relative;
        cursor: pointer;

        padding-left: 70px;
    }

    &__text {
        color: saturate(#ffe2e2, 100%);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all calc($duration / 2) linear calc($duration / 2);

        &:hover {
            color: #ffffff;
            transition: all 0.2s ease;
        }
    }

    .icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        margin: auto;

        fill: none;
        stroke: #ffa53d;
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;

        &__line,
        &__box,
        &__check {
            transition: stroke-dashoffset $duration cubic-bezier(0.9, 0, 0.5, 1);
        }

        &__circle {
            stroke: #ffa53d;
            stroke-dasharray: 1 6;
            stroke-width: 0;

            transform-origin: 13.5px 12.5px;
            transform: scale(0.4) rotate(0deg);
            animation: none $duration linear; //cubic-bezier(.08,.56,.04,.98);

            @keyframes explode {
                //0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); }
                30% {
                    stroke-width: 3;
                    stroke-opacity: 1;
                    transform: scale(0.8) rotate(40deg);
                    //animation-timing-function: cubic-bezier(.89,.01,.95,.51);
                }
                100% {
                    stroke-width: 0;
                    stroke-opacity: 0;
                    transform: scale(1.1) rotate(60deg);
                    //animation-timing-function: cubic-bezier(.08,.56,.04,.98);
                }
            }
        }

        &__box {
            stroke-dasharray: 56.1053, 56.1053;
            stroke-dashoffset: 0;
            transition-delay: calc($duration * 0.2);
        }
        &__check {
            stroke-dasharray: 9.8995, 9.8995;
            stroke-dashoffset: 9.8995;
            transition-duration: calc($duration * 0.4);
        }
        &__line {
            stroke-dasharray: 168, 1684;
            stroke-dashoffset: 168;
        }
        &__circle {
            stroke: #7dfd27;
            animation-delay: calc($duration * 0.7);
            animation-duration: calc($duration * 0.7);
        }
    }

    &__checkbox:checked {
        ~ .todo__text {
            transition-delay: 0s;
            color: darken(#eaffdb, 10%);
            opacity: 0.6;
        }

        ~ .todo__icon .icon__box {
            stroke-dashoffset: 56.1053;
            transition-delay: 0s;
        }
        ~ .todo__icon .icon__line {
            stroke-dashoffset: -8;
        }
        ~ .todo__icon .icon__check {
            stroke-dashoffset: 0;
            transition-delay: calc($duration * 0.6);
        }
        ~ .todo__icon .icon__circle {
            animation-name: explode;
        }
    }

    &__buttons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        margin-left: 20px;
    }
}
</style>
