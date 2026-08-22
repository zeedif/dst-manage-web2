import {Card} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export default ({secondaries}) => {
    const {t} = useTranslation()

    useEffect(()=>{
    },[])

    return (
        <>
            <div className="text-base font-medium pb-2">{t('dstServerList.secondaries.layerCount', {count: Object.keys(secondaries).length})}</div>
            <div  style={{
                height: 400,
                overflowY: 'auto',
            }}>
                {Object.keys(secondaries).map(key => (
                    <div key={key}>
                        <Card bordered={false} style={{
                            backgroundColor: '#F0F2F5'
                        }}>
                            <div>
                                <span>{t('dstServerList.secondaries.worldId')} {secondaries[key].id}</span>
                            </div>
                            <div>
                                <span>{t('dstServerList.secondaries.worldIp')} {secondaries[key].__addr}:{secondaries[key].port}</span>
                            </div>
                            <div>
                                <span>{t('dstServerList.secondaries.steam')} {secondaries[key].steamid}</span>
                            </div>
                        </Card>
                        <br/>
                    </div>
                ))}
            </div>

        </>
    )
}