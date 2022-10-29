
let renderVar: any = false;
let setRenderVar: any = null;
export const SetGlobalRerender = (setRender: any, render: any) => {
    renderVar = render;
    setRenderVar = setRender;
};

export const GlobalRerender = () => {
    setRenderVar(!renderVar);
}
