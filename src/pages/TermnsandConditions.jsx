import React from "react";
import "./TermnsandConditions.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const TermsAndConditions = () => {
    return (
        <>
            <Header identityPage={true} />
            <div className="terms-container" id="terms">
                <div className="terms-content">
                    <h2 className="terms-title">Terms and Conditions</h2>
                    <p className="terms-updated">Last updated: [Date]</p>
                    <p>
                        Welcome to <strong>Securoak</strong>! These Terms and Conditions outline the rules and regulations for the use of our website, located at [Website URL].
                    </p>
                    <p>
                        By accessing this website, you agree to accept these Terms and Conditions in full. If you disagree with any part of these Terms, you must not use our website.
                    </p>

                    <section className="terms-section">
                        <h4>1. Definitions</h4>
                        <p>
                            “Site” refers to the website owned and operated by <strong>Securoak</strong>.<br />
                            “User,” “you,” and “your” refers to any individual or entity that accesses the Site.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>2. Intellectual Property Rights</h4>
                        <p>
                            Unless otherwise stated, <strong>Securoak</strong> and/or its licensors own the intellectual property rights for all material on the Site. All intellectual property rights are reserved. You may access this from the Site for your own personal use, subject to restrictions set in these terms and conditions.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>3. User Responsibilities</h4>
                        <p>You must not:</p>
                        <ul>
                            <li>Republish material from the Site.</li>
                            <li>Sell, rent, or sub-license material from the Site.</li>
                            <li>Reproduce, duplicate, or copy material from the Site.</li>
                            <li>Redistribute content from the Site.</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h4>4. Disclaimer of Warranties</h4>
                        <p>
                            The information provided on this Site is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Site or the information, products, services, or related graphics contained on the Site for any purpose.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>5. Limitation of Liability</h4>
                        <p>
                            In no event will <strong>Securoak</strong>, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of (or inability to access or use) the Site; (ii) any conduct or content of any third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>6. Indemnification</h4>
                        <p>
                            You agree to defend, indemnify, and hold harmless <strong>Securoak</strong> and its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the Site.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>7. Modifications to the Terms and Conditions</h4>
                        <p>
                            We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review these Terms periodically for any changes.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>8. Governing Law</h4>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h4>9. Contact Us</h4>
                        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                        <p>
                            Email: [email@example.com]<br />
                            Phone: [Your Phone Number]
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
