import React, { memo } from "react";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";


const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <RoomWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" ⊙ ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            readOnly
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  );
});

export default RoomItem;
