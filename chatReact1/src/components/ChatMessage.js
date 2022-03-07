export default function ChatMessage({msg}) {

    
    return (
        <div className="px-3 py-2 flex no-wrap items-start flex-row-reverse">
            <div className="block w-80 break-words p-2 rounded-md sent-message-bg text-right">
                <p className="text-xs">{msg.user}</p>
                <p>{msg.body}</p>
            </div>
        </div>
    );
}