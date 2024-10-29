import React, {PropsWithChildren} from 'react';
import logo from './logo.svg';
import './App.css';
import {Avatar, Col, Descriptions, DescriptionsProps, Divider, Row, Space, Typography} from "antd";
import AvatarImg from './assets/avatarimg.jpg';
import {CalendarFilled, EnvironmentFilled, LinkedinFilled, MailFilled, PhoneFilled} from "@ant-design/icons";

function App() {
    const {Title, Paragraph, Text} = Typography;
    return (
        <div className="container">
            <header>
                <div className={'header-left'}>
                    <Title level={1}>DANTE FILARETO</Title>
                    <Text strong className={'headline blue'}>
                        Driving Business Success with Scalable CRM Solutions |<br/> Salesforce
                        Architect & Developer | Expertise in Service Cloud, Salesforce Industries,
                        Vlocity | Software Engineer | CRM Strategist
                    </Text>
                    <Descriptions labelStyle={{marginBottom: '-8px', alignItems: 'center'}} colon={false}
                                  items={headerItems}
                                  size={"small"}
                                  column={2} className={'header-descriptions'} contentStyle={{marginBottom: '-8px'}}/>
                </div>
                <div className={'header-right'}>
                    <Avatar src={AvatarImg} size={150}/>
                </div>
            </header>
            <Row gutter={42}>
                <Col span={14}>
                    <main>
                        <SectionTitle title={'EXPERIENCE'}/>
                        <ExpItem date={'10/2021 - 08/2024'} company={'MISUMI'} role={'Salesforce Engineer'}
                                 location={'Remote'}>
                            <Paragraph className={'exp-paragraph'}>
                                Misumiʼs USA branch is a global leader in industrial components.
                                Led the initial implementation of the Salesforce platform for Misumiʼs
                                USA branch, a global leader in industrial components.
                            </Paragraph>
                            <ul>
                                <li>Played a key role in the migration from Dynamics 360 to Salesforce,
                                    tailoring solutions to meet business needs.
                                </li>
                                <li>Developed custom features to streamline operations for clients like Tesla
                                    and Panasonic.
                                </li>
                                <li>Worked closely with Product Owners and development teams, ensuring
                                    alignment with business goals.
                                </li>
                                <li>Leveraged both Waterfall and Scrum methodologies to deliver scalable
                                    solutions in a fast-paced environment.
                                </li>
                            </ul>
                            <TechStack
                                values={'Apex, LWC, Flows, Sales Cloud, BitBucket, AzureDevOps, IntelliJ IDEA, Layered Architecture, LWC, Flows, Einstein for developers, Redshift Connector'}/>
                        </ExpItem>
                        <DashedDivider/>
                        <ExpItem date={'05/2021 - 12/2021'} company={'2U/Trilogy'} role={'Salesforce Developer'}
                                 location={'Remote'}>
                            <Paragraph className={'exp-paragraph'}>
                                Contributed as a Salesforce Developer within a high-performance agile
                                team, delivering scalable, maintainable solutions.
                            </Paragraph>
                            <ul>
                                <li>
                                    Contributed as a Salesforce Developer within a high-performance agile
                                    team, delivering scalable, maintainable solutions.
                                </li>
                                <li>
                                    Refined existing functionalities for improved performance and scalability.
                                </li>
                                <li>
                                    Participated in large-scale design efforts and system enhancements.
                                </li>
                                <li>
                                    Responsible for bug fixes, system hygiene tasks, and comprehensive
                                    documentation.
                                </li>
                                <li>
                                    Worked closely with architects and tech leads to implement robust,
                                    long-term solutions.
                                </li>
                            </ul>
                            <TechStack
                                values={'Apex, LWC, Flows, Sales Cloud, Github, IntelliJ IDEA, Copado Essentials (ClickDeploy.io), Integrations, Event Bus patterns, SOA, Layered Architecture, LWC'}/>
                        </ExpItem>
                        <DashedDivider/>
                        <ExpItem date={'12/2019 - 05/2021'} company={'Bluewolf, an IBM Company'}
                                 role={'Salesforce Architect'}
                                 location={'Buenos Aires, Argentina'}>
                            <Paragraph className={'exp-paragraph'}>
                                As Salesforce Architect for the AMS corrective team on the FAN Project
                                Telecom Argentina)
                            </Paragraph>
                            <ul>
                                <li>
                                    Led the resolution of critical bugs and provided architectural oversight
                                    for ongoing improvements.
                                </li>
                                <li>
                                    Trained and mentored new team members as part of the IBM BTP
                                    Program
                                </li>
                                <li>
                                    Managed a team of 5+ developers, ensuring smooth project execution
                                    and alignment with client expectations
                                </li>
                                <li>
                                    Focused on delivering high-quality solutions that resolved technical
                                    challenges and enhanced operational efficiency.
                                </li>
                            </ul>
                            <TechStack
                                values={'Apex, Visualforce, Omniscript, Dataraptor, Integration Procedures, Sales Cloud, Service Cloud, Vlocity, Integrations, Copado, SLAs, Entitlement Processes'}/>
                        </ExpItem>
                        <DashedDivider/>
                        <ExpItem date={'05/2019 - 12/2019'} company={'Bluewolf, an IBM Company'}
                                 role={'Salesforce Developer'}
                                 location={'Buenos Aires, Argentina'}>
                            <Paragraph className={'exp-paragraph'}>
                                Worked on the AMS corrective team for the FAN Project Telecom
                                Argentina).
                            </Paragraph>
                            <ul>
                                <li>
                                    Responsible for solving critical and blocking bugs.
                                </li>
                                <li>
                                    ensuring smooth communication between the technical team and
                                    business stakeholders.
                                </li>
                            </ul>
                            <TechStack values={'Apex, Visualforce, Omniscript, Dataraptor, Integration Procedures, Sales Cloud, Service Cloud, Vlocity, Copado, SLAs, Entitlement Processes'}/>
                        </ExpItem>
                        <DashedDivider/>
                        <ExpItem date={'05/2018 - 05/2019'} company={'Xappia'}
                                 role={'Salesforce Developer'}
                                 location={'Buenos Aires, Argentina'}>
                            <Paragraph className={'exp-paragraph'}>
                                Developed new features and customizations using APEX and Lightning components for the
                                Garbarino and MercadoLibre projects
                            </Paragraph>
                            <ul>
                                <li>
                                    Actively collaborated with clients to understand their needs and translate them into
                                    technical solutions.
                                </li>
                                <li>
                                    Provided evolutionary support by addressing implementation bugs and ensuring smooth
                                    communication between the technical team and business stakeholders
                                </li>
                            </ul>
                            <TechStack values={'Apex, Visualforce, Aura Components, Sales Cloud, Service Cloud, SLAs, Queues, Agents, Visualforce, Aura'}/>
                        </ExpItem>
                        <DashedDivider/>
                        <ExpItem date={'01/2016 - 05/2018'} company={'Freelance'}
                                 role={'Freelance Web Developer'}
                                 location={'Buenos Aires, Argentina'}>
                            <Paragraph className={'exp-paragraph'}>
                                B2B, B2C (Ecommerce) website development Using the following technologies:
                            </Paragraph>
                            <ul>
                                <li> HTML, CSS, JS, JQuery</li>
                                <li>PHP</li>
                                <li>ReactJS, NodeJS</li>
                                <li>Typescript</li>
                                <li>TiendaNube, Mercadolibre</li>
                            </ul>
                        </ExpItem>
                    </main>
                    <section>
                        <SectionTitle title={'EDUCATION'}/>
                        <ExpItem date={'2023 - (In Progress)'} role={'Software Engineer'}
                                 company={'Universidad de la Marina Mercante'} location={'Buenos Aires, Argentina'}/>
                    </section>
                </Col>
                <Col span={10}>
                    <aside>
                        <section>
                            <SectionTitle title={'SUMMARY'}/>
                            <SummaryText/>
                        </section>
                        <section>
                            <SectionTitle title={'LANGUAGES'}/>
                            <Language title={'English'} level={'Native'}/>
                            <Language title={'Spanish'} level={'Native'}/>
                        </section>
                        <section>
                            <SectionTitle title={'CERTIFICATIONS'}/>
                            <Certification title={'Salesforce Certified Platform Developer I'} provider={'Salesforce'}/>
                            <Certification title={'Salesforce Certified App Builder'} provider={'Salesforce'}/>
                            <Certification title={'Salesforce Certified OmniStudio Developer'} provider={'Salesforce'}/>
                            <Certification title={'Enterprise Design Thinking Practitioner'} provider={'IBM'}/>
                        </section>
                    </aside>
                </Col>
            </Row>
        </div>
    );
}

export default App;

interface SectionTitleProps {
    title: string;
}

function SectionTitle({title}: SectionTitleProps) {
    const {Title} = Typography;
    return (
        <>
            <Title level={3}>{title}</Title>
            <div className={'divider'}></div>
        </>
    );
}

function SummaryText() {
    const {Paragraph} = Typography;
    return (
        <>
            <Paragraph>
                I am an experienced Salesforce Architect and
                Developer with a strong foundation in designing
                and delivering scalable CRM solutions across
                various industries, including telecom, education,
                and industrial components.
            </Paragraph>
            <Paragraph>
                I have led teams and
                collaborated closely with product owners and
                developers, always focusing on creating
                sustainable, long-term systems that support
                business growth.
            </Paragraph>
            <Paragraph>
                Having contributed to large scale projects like IBM's Telecom FAN project,
                where I oversaw a team responsible for critical
                bug resolution and trained new entrants, I bring
                both technical expertise and leadership
                experience.
            </Paragraph>
            <Paragraph>
                My work with clients such as Misumi,
                2U/Trilogy, and Telecom Argentina has honed my
                ability to align technical solutions with business
                goals. With a solid background in software
                architecture, I specialize in implementing and
                refining Salesforce platforms, transitioning
                systems like Dynamics 360 to Salesforce, and
                ensuring high-quality, scalable code.
            </Paragraph>
            <Paragraph>
                My experience spans Agile and Waterfall
                methodologies, and I excel in environments that
                prioritize collaboration and continuous
                improvement. I am particularly interested in joining
                companies that value mature work cultures and
                proactive development practices.
            </Paragraph>
            <Paragraph>
                As a technical leader, I thrive on challenges and am committed to
                delivering impactful CRM solutions that enhance
                operational efficiency.
            </Paragraph>
        </>
    )
}

interface ExpItemProps {
    role: string;
    company: string;
    date: string;
    location: string;
}

function ExpItem({role, company, date, location, children}: PropsWithChildren<ExpItemProps>) {
    const {Title, Text} = Typography;
    return (
        <>
            <Title level={4} className={'exp-role'}>{role}</Title>
            <Text strong className={'exp-company blue'}>{company}</Text>
            <Descriptions colon={false} column={2} size={"small"} labelStyle={{alignItems: 'center'}}
                          items={[{
                              key: '1',
                              label: <CalendarFilled/>,
                              children: date,
                          }, {
                              key: '2',
                              label: <EnvironmentFilled/>,
                              children: location,
                          }]}/>
            {children}
        </>
    )
}

function DashedDivider() {
    return (
        <Divider variant={'dashed'} style={{margin: '16px 0'}}/>
    )
}

interface TechStackProps {
    values: string;
}

function TechStack({values}: TechStackProps) {
    return (
        <Descriptions column={1} size={"small"}
                      style={{marginTop: '8px'}} items={[{
            key: '1',
            label: 'Technologies',
            children: values,
        }]}/>
    )
}

interface CertificationProps {
    title: string;
    provider: string;
}

function Certification({title, provider}: CertificationProps) {
    const {Text} = Typography;
    return (
        <>
            <Text strong className={'exp-company blue'}>{title}</Text>
            <br/>
            <Text>{provider}</Text>
            <DashedDivider/>
        </>
    )
}

interface LanguageProps {
    title: string;
    level: string;
}

function Language({title, level}: LanguageProps) {
    const {Text} = Typography;
    return (
        <>
            <Row>
                <Col span={12}>
                    <Text strong className={'exp-company blue'}>{title}</Text>
                    <br/>
                    <Text>{level}</Text>
                </Col>
                <Col span={12} className={'circle-container'}>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                </Col>
            </Row>
            <DashedDivider/>
        </>
    )
}

function Circle() {
    return (
        <div className={'circle'}></div>
    )
}

const headerItems: DescriptionsProps['items'] = [
    {
        key: '1',
        label: <PhoneFilled style={{color: '#1e8ffd'}}/>,
        children: '+5491134911149',
    },
    {
        key: '2',
        label: <MailFilled style={{color: '#1e8ffd'}}/>,
        children: 'filaretodante@gmail.com',
    },
    {
        key: '3',
        label: <LinkedinFilled style={{color: '#1e8ffd'}}/>,
        children: 'https://www.linkedin.com/in/dante-filareto/',
    },
    {
        key: '4',
        label: <EnvironmentFilled style={{color: '#1e8ffd'}}/>,
        children: 'Buenos Aires, Argentina',
    },
];
