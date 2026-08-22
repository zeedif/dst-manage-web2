import React, {useEffect, useState} from "react";
import {Tabs} from "antd";
import {useTranslation} from "react-i18next";
import CollapseWithMarkdown from "./CollapseWithMarkdown.jsx";
import MarkdownRender from "./MarkdownRender.jsx";

export default ()=>{
    const {t} = useTranslation()

    const [markdownContent, setMarkdownContent] = useState("")
    useEffect(()=>{
        fetch('misc/FQA.md')
            .then(response => response.text())
            .then(data => {
                setMarkdownContent(data)
            })
            .catch(error => {
                console.error('无法加载config配置文件', error);
            });
    },[])

    const items = [
        {
            key: '0',
            label: t('help.tab.deployTutorial'),
            children: <MarkdownRender url={`/api/dst-static/dst-get-start.md`} decode={true} />,
        },
        {
            key: '1',
            label: t('help.tab.faq'),
            children: <CollapseWithMarkdown markdownContent={markdownContent} />,
        },
        {
            key: '2',
            label: t('help.tab.multiWorldTutorial'),
            children: <MarkdownRender url={'misc/DontStarveMultiWorldTotorial.md'}/>,
        },
        {
            key: '3',
            label: t('help.tab.multiServerTutorial'),
            children: <MarkdownRender url={'misc/DontStarveServerMultipleMachinesSeriesTutorial.md'}/>,
        },
        {
            key: '4',
            label: t('help.tab.dockerComposeRef'),
            children: <MarkdownRender url={'misc/Docker-compose.md'}/>,
        },
    ];

    return<>
        <Tabs defaultActiveKey="0" items={items}/>
    </>
}