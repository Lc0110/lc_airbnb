import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile">
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight