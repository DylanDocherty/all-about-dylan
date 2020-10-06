import React from 'react';

import "../contact-me/contact-me.style.css"

export const ContactMe = ({props, handleChange}) => (
    <div id="main-content">
        <div id="contacts">
            <div id="form-box">
            
            {/* https://formkeep.com/f/139f3fee75e7 */}
            
            {/* mailto:dylandocherty98@gmail.com */}
                <form action="https://mailthis.to/dylandocherty98@gmail.com"
                    acceptCharset="UTF-8"
                    encType="multipart/form-data"
                    method="POST">
                    Name:<br/>
                    <input type="text" name="name"/><br/>
                    E-mail:<br/>
                    <input type="text" name="mail"/><br/>
                    Comment:<br/>
                    <input type="text" name="comment" size="50"/><br/><br/>
                    <div id="button-container">
                        <input type="submit" value="Send"/>
                        <input type="reset" value="Reset"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
);