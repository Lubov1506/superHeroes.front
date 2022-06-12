import React from 'react';
import { Formik, Form, Field } from 'formik';
import { cresateHeroRequestAction } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const HeroForm = props => {
    const onSubmitForm = (values) =>{
        props.cresateHeroRequestAction(values)
    }

    return (
        <>
        <h1>Super Hero</h1>
        <Formik initialValues={{
            nickName: '',
            realName: '',
            originDescription: '',
            //superPowers: '', 
            catchPhrase: '',
            //images: ''
        }} onSubmit={onSubmitForm}>
            <Form>
                <Field name='nickName' placeholder='Nick name'/>
                <Field name='realName' placeholder='Real name'/>
                <Field name='originDescription' placeholder='Origin description'/>
                {/* <Field name='superPowers' placeholder='Super powers'/> */}
                <Field name='catchPhrase' placeholder='Catch phrase'/>
                {/* <Field name='images' placeholder='Images'/> */}
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
        </>
    );
}

export default connect(null, {cresateHeroRequestAction})(HeroForm);
