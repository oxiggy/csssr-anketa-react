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

export default class Dossier extends React.Component {

    state= {
        fullname: 'Воид Ада',
        birthday: '1994',
        location: 'г. Калининград, Россия',
        skype: 'oxiggy',
        email: 'oxiggy@oxiggy.com',
        skills: {
            'БЭМ/OOCSS': true,
            'Pug (Jade)': true,
            'Stylus/LESS/SASS': true,
            'Работаю с SVG': false,
            'Верстаю семантично': true,
            'Accessibility (A11Y)': true,
            'ES2015/ES2016': true,
            'Gulp/GRUNT': false,
            'Webpack': true,
            'Дружу с WebGL': false,
            'jQuery': true,
            'Знаю/изучаю Angular': false,
            'Знаю/изучаю React': true,
            'Знаю/изучаю Node.js': true,
            'Использую Git': true,
            'С глазомером <span style="position: relative; top: 1px;">всё</span> <span style="position: relative; top: 2px;">ок</span>': true,
            'Читаю <a href="https://blog.csssr.ru/">blog.csssr.ru</a>': false,
            'Я ленивый(-ая)': false,
            'У меня хороший английский': false,
        },
        about: 'Мне понравилось ваше обманчиво простое тестовое задание, от работы ожидаю похожих интересных испытаний.',
        plans: {
            'Верстать': false,
            'Прокачиваться в JS': true,
            'Менеджерство': false,
            'Другое': false,
        },

        date: '30.06.2019',
    };

    handleChange= (name, value) => {
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <Page className="b-dossier">
                <Header/>
                <Main>

                    <Section
                    >
                        <Fieldset legend={"Личные данные"}>
                            <Field
                                name="fullname"
                                label={"Полное ФИО"}
                                value={this.state.fullname}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="birthday"
                                label={"Год рождения"}
                                value={this.state.birthday}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="location"
                                label={"Место жительства"}
                                value={this.state.location}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="skype"
                                label={"Скайп"}
                                value={this.state.skype}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="email"
                                label={"Почта"}
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Fieldset>


                    </Section>

                    <Section
                        heading={<React.Fragment>Расскажите о&nbsp;себе чекбоксами</React.Fragment>}
                        text={<React.Fragment>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не&nbsp;означает, что у&nbsp;вас меньше шансов стать одним из&nbsp;наших товарищей. Это означает, что вы&nbsp;будете получать те&nbsp;задачи, с&nbsp;которыми гарантировано будете справляться.</React.Fragment>}
                    >
                        <CheckboxList name="skills"
                                      items={this.state.skills}
                                      onChange={this.handleChange}
                        />
                    </Section>

                    <Section heading={<React.Fragment>Уровень владения JavaScript</React.Fragment>}
                    >
                        <Range/>

                    </Section>

                    <Section
                        heading={<React.Fragment>Расскажите о&nbsp;себе словами</React.Fragment> }
                        text={<React.Fragment>Напишите пару предложений, чем вас привлекла наша вакансия и&nbsp;чего вы&nbsp;ожидаете от&nbsp;работы в&nbsp;CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.</React.Fragment>}
                    >
                        <Textarea
                            name="about"
                            value={this.state.about}
                            onChange={this.handleChange}
                        />
                    </Section>

                    <Section
                        heading={<React.Fragment>Какие у&nbsp;вас планы на&nbsp;будущее?</React.Fragment> }
                        text={<React.Fragment>Этот ответ ни&nbsp;на&nbsp;что не&nbsp;повлияет. Не&nbsp;беда, если в&nbsp;будущем ваши планы поменяются.</React.Fragment>}
                    >
                        <RadioGroup
                            name="plans"
                            items={this.state.plans}
                            onChange={this.handleChange}
                        />
                    </Section>

                    <Footer>
                        <Field
                            name="date"
                            label={"Дата заполнения"}
                            value={this.state.date}
                            onChange={this.handleChange}
                        />
                    </Footer>

                </Main>
            </Page>
        )
    }
}

