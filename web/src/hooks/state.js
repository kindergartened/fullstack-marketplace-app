import {useContext} from "react";
import {GlobalState} from "../App";

export function useErrorState() {
    const state = useContext(GlobalState);

    return state.error;
}

export function useMenuState() {
    const state = useContext(GlobalState);

    return state.menu;
}

export function useMeState() {
    const state = useContext(GlobalState);

    return state.me;
}