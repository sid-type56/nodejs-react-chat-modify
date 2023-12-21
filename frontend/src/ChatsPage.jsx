import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '6c9a92a6-4345-404c-8f84-d998e64fab6f',
        props.user.username,
        props.user.secret
    );
    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps}></MultiChatSocket>
        <MultiChatWindow {...chatProps} style={{ height: "100%" }}></MultiChatWindow>
    </div>
}
export default ChatsPage