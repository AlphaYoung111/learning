import React, { memo } from 'react'
import { SongCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/util/format-utils'
export default memo(function AYSongsCover(props) {
  const { info } = props

  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <img
          src={getSizeImage(info.picUrl || info.coverImgUrl, 140)}
          alt={info.name}
        ></img>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source">
        by {info.copywriter || info.creator?.nickname || ''}
      </div>
    </SongCoverWrapper>
  )
})