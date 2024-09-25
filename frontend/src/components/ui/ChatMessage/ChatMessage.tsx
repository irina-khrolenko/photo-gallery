import Avatar from "@mui/material/Avatar";
import { ChatMessageProps } from "./ChatMessage.props";

export const ChatMessage = ({ mainAvatar, messagesList }: ChatMessageProps) => {
  return (
    <div className="flex items-end space-x-4  rounded-lg w-full max-w-40%">
      <Avatar
        alt="Remy Sharp"
        src={mainAvatar}
        sx={{ width: 40, height: 40 }}
      />
      <div className="flex flex-col space-y-2">
        {messagesList?.map((message) => (
          <div
            key={message}
            className="bg-[#826749] text-[#f1e1cf] p-3 rounded-3xl max-w-sm rounded-bl-none text-xs"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};
