import { fetchDefaultAvatar } from '@/app/utils/fetch/fetch.default'
import { MenuUnfoldOutlined, SearchOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'

type Props = {}

const MainChatBox = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <div className='h-[10%] border-b-2 bg-white flex items-center justify-between gap-5 p-5'>
        <div className='w-1/2 h-full flex items-center gap-3'>
          <Avatar className='border bg-white border-slate-300' shape='circle' size={50} src={fetchDefaultAvatar()} alt='avatar' />
          <div className='w-2/3 flex flex-col '>
            <span className='font-bold text-lg'>Nguyễn Quốc Đạt</span>
            <span className='text-sm text-slate-400'>Đang hoạt động</span>
          </div>
        </div>

        <div className='w-1/3 flex justify-end gap-3 items-center'>
          <SearchOutlined />
          <VideoCameraOutlined />
          <MenuUnfoldOutlined />
        </div>

      </div>

    </div>
  )
}

export default MainChatBox