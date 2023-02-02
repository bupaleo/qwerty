import React from 'react';
import module from './Section.module.scss'
function Section(props) {
    return (
        <section className={module.Section}>
<div>
    <ul className={module.list}>
    <li><h3 className={module.h1}>Today</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3  className={module.h3}>Clouds</h3> </li>
    <li><h3 className={module.h1}>Fridey</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3 className={module.h3}>Clouds</h3> </li>
    <li><h3 className={module.h1}>saturday</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3 className={module.h3}>Clouds</h3> </li>
    <li><h3 className={module.h1}>Sunday</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3 className={module.h3}>Clouds</h3> </li>
    <li><h3 className={module.h1}>Monday</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3 className={module.h3}>Clouds</h3> </li>
    <li><h3 className={module.h1}>Tuesday</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3 className={module.h3}>Clouds</h3> </li>
    <li><h3 className={module.h1}>Wednesday</h3>
    <p className={module.p}>-17.89°C - -2.74°C</p>
    <h3 className={module.h3}>Clouds</h3> </li>
    </ul>

</div>
        </section>
    );
}

export default Section;    