import React from 'react';
import Team from "../../component/Team";
import {Team1, Team2, Team3, Team4} from "../../Images";

export default function Index() {
    return (
        <>
            <section className="team_section layout_padding">
                <div className="container-fluid">
                    <div className="heading_container heading_center">
                        <h2 className="">
                            Our <span> Team</span>
                        </h2>
                    </div>

                    <div className="team_container">
                        <div className="row">
                            <Team image={Team1}
                                  fisrtAndLastName={"Joseph Brown"}
                                  title="Marketing Head"
                                  instagram={1}
                            />
                            <Team image={Team2}
                                  fisrtAndLastName={"Nancy White"}
                                  title="Marketing Head"
                                  facebook={1}
                                  twitter={1}
                            />
                            <Team image={Team3}
                                  fisrtAndLastName={"Earl Martinez"}
                                  title="Marketing Head"
                                  facebook={1}
                                  twitter={1}
                                  linkedin={1}
                            />
                            <Team image={Team4}
                                  fisrtAndLastName={"Josephine Allard"}
                                  title="Marketing Head"
                                  facebook={1}
                                  twitter={1}
                                  linkedin={1}
                                  youtube={1}
                                  instagram={1}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

