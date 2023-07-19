import React from 'react';
import {Title} from '../common/components/title/title';
import style from './contacts.module.css'
import axios from 'axios';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {MyContact} from './my-contact/my-contact';

type FormDataType = {
    name: string;
    email: string;
    message: string;
};

export const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormDataType>({mode: 'onTouched'});

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        axios
            .post('https://node-js-gmail.vercel.app/sendMessage', data, {headers: {
                    'Content-Type': 'application/json'
                }})
            .then(() => {
                toast.success('Thank you for your letter!');
                reset();
            })
            .catch(() => {
                toast.error('Sorry, there\'s been an error');
            });
        reset();
    };

    return (
        <div id="contacts" className={style.contacts}>
            <div className={style.contactsContainer}>
                <Title title={'contacts'} subTitle={'form to contact me'}/>
                <div className={style.contactWrapper}>
                    <div className={style.formWrapper}>
                        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                            <input
                                placeholder={'Full name:'}
                                {...register('name', {
                                    required: 'Name is require field!',
                                })}
                            />
                            {/*{errors.name && <div className={style.errors}>{errors.name.message}</div>}*/}
                            <input
                                placeholder={'Email:'}
                                {...register('email', {
                                    required: 'Email is require field!',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {/*{errors.email && <div className={style.errors}>{errors.email.message}</div>}*/}
                            <textarea
                                placeholder={'Your message:'}
                                {...register('message', {
                                    required: 'Message is require field',
                                })}
                            />
                            {/*{errors.message && <div className={style.errors}>{errors.message.message}</div>}*/}
                            <button type={'submit'} className={style.buttonSend}>
                                Send
                            </button>
                        </form>
                    </div>
                    <div className={style.myContacts}>
                        <MyContact title={'Address'} info={'Moscow, Russia'}/>
                        <MyContact title={'Phone'} info={'+79857306416'}/>
                        <MyContact title={'Email'} info={'artem.yanchenko.94@mail.ru'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
