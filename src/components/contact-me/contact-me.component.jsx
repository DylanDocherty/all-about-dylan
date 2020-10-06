import React from 'react';

import "../contact-me/contact-me.style.css"

export const ContactMe = ({ props, handleChange }) => (
    <div id="main-content">
        <div id="contacts">
            <div id="form-box">

                {/* https://formkeep.com/f/139f3fee75e7 */}

                {/* mailto:dylandocherty98@gmail.com */}
                <form action="https://mailthis.to/dylandocherty98@gmail.com"
                    acceptCharset="UTF-8"
                    encType="multipart/form-data"
                    method="POST">
                    Name:<br />
                    <input className="inputs" type="text" name="name" /><br />
                    E-mail:<br />
                    <input className="inputs" type="text" name="mail" /><br />
                    Comment:<br />
                    <input id="comment-section" type="text" name="comment" /><br /><br />
                    <div id="button-container">
                        <input className="buttons" type="submit" value="Send" />
                        <input className="buttons" type="reset" value="Reset" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);