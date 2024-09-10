import { Flex, Image, Radio, Switch, Typography } from 'antd'
import React from 'react'
import SettingComponent from './setting.component'

import { fetchDefaultAppearance } from '@/app/utils/fetch/fetch.default'

type Props = {}

const AppearanceSetting = (props: Props) => {
  return (
    <Flex vertical gap="large" className=''>
        <SettingComponent title="Cài đặt giao diện" >
            <Flex align='center' justify='space-between' className='p-3'>
                <Flex vertical align='center' justify='center' gap="middle">
                    <Image src={fetchDefaultAppearance()} preview={false} width={100} />
                    <Radio>
                        <Typography>Mặc định</Typography>
                    </Radio>
                </Flex>
            </Flex>
        </SettingComponent>

        <SettingComponent title="Hình nền chat">
            <Flex align='center' justify='space-between'>
                <Typography>Sử dụng avatar làm hình nền</Typography>
                <Switch />
            </Flex>
        </SettingComponent>
    </Flex>
  )
}

export default AppearanceSetting