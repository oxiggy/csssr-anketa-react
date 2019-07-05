import React from "react";
import Page from "../../components/Page";
import './Dossier.styl';
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";
import CheckboxList from "../../components/CheckboxList";
import Footer from "../../components/Footer";
import Field from "../../components/Field";
import Range from "../../components/Range";
import Textarea from "../../components/Textarea";
import RadioGroup from "../../components/RadioGroup";
import Fieldset from "../../components/Fieldset";

const SKILLS= [
    { label: 'БЭМ/OOCSS', checked: true },
    { label: 'Pug (Jade)', checked: true },
    { label: 'Stylus/LESS/SASS', checked: true },
];
const PLANS= [

];

export default class Dossier extends React.Component {

    render() {
        return (
            <Page className="b-dossier">
                <Header/>
                <Main>

                    <Section
                    >
                        <Fieldset legend={"Личные данные"}>
                            <Field name={"Полное ФИО"} value= {"Воид Ада"}/>
                            <Field name={"Год рождения"} value= {"1994"}/>
                            <Field name={"Место жительства"} value= {"г. Калининград, Россия"}/>
                            <Field name={"Скайп"} value= {"oxiggy"}/>
                            <Field name={"Почта"} value= {"oxiggy@oxiggy.com"}/>
                        </Fieldset>

                    </Section>

                    <Section
                        heading={<React.Fragment>Расскажите о&nbsp;себе чекбоксами</React.Fragment>}
                        text={<React.Fragment>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не&nbsp;означает, что у&nbsp;вас меньше шансов стать одним из&nbsp;наших товарищей. Это означает, что вы&nbsp;будете получать те&nbsp;задачи, с&nbsp;которыми гарантировано будете справляться.</React.Fragment>}
                    >
                        <CheckboxList items={SKILLS} />
                    </Section>

                    <Section heading={<React.Fragment>Уровень владения JavaScript</React.Fragment>}
                    >
                        <Range/>

                    </Section>

                    <Section
                        heading={<React.Fragment>Расскажите о&nbsp;себе словами</React.Fragment> }
                        text={<React.Fragment>Напишите пару предложений, чем вас привлекла наша вакансия и&nbsp;чего вы&nbsp;ожидаете от&nbsp;работы в&nbsp;CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.</React.Fragment>}
                    >
                        <Textarea value={"Мне понравилось ваше обманчиво простое тестовое задание, от работы ожидаю похожих интересных испытаний."}/>
                    </Section>

                    <Section
                        heading={<React.Fragment>Какие у&nbsp;вас планы на&nbsp;будущее?</React.Fragment> }
                        text={<React.Fragment>Этот ответ ни&nbsp;на&nbsp;что не&nbsp;повлияет. Не&nbsp;беда, если в&nbsp;будущем ваши планы поменяются.</React.Fragment>}
                    >
                        <RadioGroup/>
                    </Section>

                    <Footer>
                        <Field name={"Дата заполнения"} value= {"30.06.2019"}/>
                    </Footer>

                </Main>
            </Page>
        )
    }
}

