"use strict";

//------
//-------
//1--------Parameters
//--------
//-------

//-----
//i-----Nav Parameters
//-----
const logo = document.querySelector(".logo");
const projectsLink = document.querySelector(".projects_link");
const aboutUsLink = document.querySelector(".about_us_link");
const signInLink = document.querySelector(".signIn");
const signinLinkText = document.querySelector(".signin_link_text");
const navLink = document.querySelectorAll(".nav_link");
const loginContainer = document.querySelector(".login_form_container");
const logoStyle = document.querySelector(".logo_style");

//-----
//ii-----Section Parameters
//-----

const body = document.querySelector("body");
const homePage = document.querySelector(".home_page");
const projectsPage = document.querySelector(".projects_page");
const aboutPage = document.querySelector(".about_page");
const staffPortal = document.querySelector(".staff_portal");
const sectionsArr = [homePage, projectsPage, aboutPage, staffPortal];

//-----
//iii-----Portal Parameters
//-----

const greetingName = document.querySelector(".greeting_name");
const currentTimeContainer = document.querySelector(".current_time");
const ongoingProjects = document.querySelector(".ongoing_content");
const completedProjects = document.querySelector(".completed_content");
const currrentProgressTab = document.querySelectorAll(".currrent_progress_tab");
const currentProgressBtn = document.querySelectorAll(".current_progress_btn");
const initiateBtn = document.querySelector(".initiate");
const initiateTab = document.querySelector(".initiate_tab");
const initiateProjectBtn = document.querySelector(".initiate_project_btn");
const initiateProjectTitle = document.querySelector(".initiate_project_title");
const initiateProjectPersonnel = document.querySelector(".initiate_personnel");
const initiateProjectSiteArea = document.querySelector(".initiate_site_area");
const initiateProjectFile = document.querySelector(".initiate_project_file");
const initiateProjectSiteLocation = document.querySelector(
    ".initiate_site_location"
);
const initiateProjectBudget = document.querySelector(".initiate_budget");
const initiateProjectResources = document.querySelector(
    ".initiate_project_resources"
);

//-----
//iii-----Login Parameters
//-----
const staffIdLogin = document.querySelector("#staff_id_input");
const staffPasswordLogin = document.querySelector("#staff_password_input");
const staffLoginBtn = document.querySelector("#login_form_btn");

//-----
//iii-----Initial State
//-----
const users = {
    user1: {
        name: "Arc ismail",
        password: "234123",
    },
    user2: {
        name: "Engr Bala",
        password: "234123",
    },
};
projectsPage.style.display =
    aboutPage.style.display =
    staffPortal.style.display =
        "none";
//-----
//iv-----Event Listeners
//-----
logo.addEventListener("click", function () {
    displaPage(homePage);
});
projectsLink.addEventListener("click", function () {
    displaPage(projectsPage);
});
aboutUsLink.addEventListener("click", function () {
    displaPage(aboutPage);
});
signInLink.addEventListener("click", function () {
    loginContainer.classList.toggle("login_form_view");
});
staffLoginBtn.addEventListener("click", function () {
    const id = verifyLogin();
    const staffPortal = new Portal(id);
});

//-----
//iv-----functions
//-----
const verifyLogin = function () {
    const inputedId = staffIdLogin.value;
    const inputedPassword = staffPasswordLogin.value;
    if (!users[inputedId]) return alert("invalid Id");
    if (!(users[inputedId].password === inputedPassword))
        return alert("invalid Password");
    return users[inputedId];
};

const displaPage = function (page) {
    sectionsArr.forEach((e) => {
        if (e == page) {
            if (page === staffPortal) return (e.style.display = "block");
            e.style.display = "flex";
        } else {
            e.style.display = "none";
        }
    });
    uiColorState(page);
};

const uiColorState = function (page) {
    if (page === homePage) {
        body.style.backgroundColor = "#6246F9";
        signInLink.style.display = "flex";
        loginContainer.style.display = "flex";

        signinLinkText.style.color = "#6246F9";
        logoStyle.style.color = "#6246F9";
        navLink.forEach((e) => (e.style.color = "#fff"));
        loginContainer.style.backgroundColor = "#7258ff";
    }
    if (page === projectsPage) {
        body.style.backgroundColor = "#F2F2F2";
        signinLinkText.style.color = "#000000";
        logoStyle.style.color = "#000000";
        navLink.forEach((e) => (e.style.color = "#000000"));
        loginContainer.style.backgroundColor = "#ACACAC";
    }
    if (page === aboutPage) {
        body.style.backgroundColor = "#0D1B1E";
        signinLinkText.style.color = "#0D1B1E";
        logoStyle.style.color = "#0D1B1E";
        loginContainer.style.backgroundColor = "#ACACAC";
        navLink.forEach((e) => (e.style.color = "#fff"));
    }
    if (page === staffPortal) {
        body.style.backgroundColor = "#F2F2F2";
        signinLinkText.style.color = "#000";
        signInLink.style.display = "none";
        logoStyle.style.color = "#000";
        loginContainer.style.display = "none";
        navLink.forEach((e) => (e.style.color = "#000"));
    }
};

//-----
//v-----classes
//-----

class Portal {
    constructor(id) {
        this.ongoingProjects = [
            {
                title: "Gbagaga Apartment",
                resources: [
                    "23 tons of stones",
                    "66,000 blocks",
                    "100 tons of alluminium",
                    "9 tons 60 6inches iron",
                    "23 tons of stones",
                    "23 tons of chipens",
                ],
                personnel: "Engr Ibrahim",
                siteArea: "35 hekers",
                initiationDate: "11th December 2021",
                currentState: "First Floor Decking",
            },
            {
                title: "Gbagaga Apartment",
                resources: [
                    "23 tons of stones",
                    "66,000 blocks",
                    "100 tons of alluminium",
                    "9 tons 60 6inches iron",
                    "23 tons of stones",
                    "23 tons of chipens",
                ],
                personnel: "Engr Ibrahim",
                siteArea: "35 hekers",
                initiationDate: "11th December 2021",
                currentState: "First Floor Decking",
            },
        ];
        this.compledtedProjects = [
            "cape Villa",
            "paradise Island",
            "greed Island",
        ];
        this.userName = id.name;

        displaPage(staffPortal);

        this.getCurentTime();
        initiateBtn.addEventListener("click", function (params) {
            initiateTab.classList.toggle("view_initiate_tab");
        });

        initiateProjectBtn.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                console.log(initiateProjectResources.value.split("and"));

                if (
                    initiateProjectTitle.value &&
                    initiateProjectPersonnel.value &&
                    initiateProjectSiteArea.value &&
                    initiateProjectSiteLocation.value &&
                    initiateProjectBudget.value &&
                    initiateProjectResources.value &&
                    initiateProjectFile.value
                ) {
                    this.createProject();
                    this.renderOngoingProject();
                } else alert("Invalid Input Detected");
            }.bind(this)
        );
        this.displayGreeting();
        this.updateProjectsReview();
        this.renderOngoingProject();
        this.updateProjectsState();
    }
    createProject() {
        this.ongoingProjects.push({
            title: initiateProjectTitle.value,
            resources: initiateProjectResources.value.split("and"),
            personnel: initiateProjectSiteArea.value,
            siteArea: initiateProjectSiteLocation.value,
            initiationDate: initiateProjectBudget.value,
            currentState: initiateProjectResources.value,
            projectFile: initiateProjectFile.value,
        });
        initiateTab.classList.toggle("view_initiate_tab");
        this.updateProjectsReview();
        // initiateProjectPersonnel.value,
        // initiateProjectSiteArea.value,
        // initiateProjectSiteLocation.value,
        // initiateProjectBudget.value,
        // initiateProjectResources.value,
        // initiateProjectFile.value,
    }

    updateProjectsState() {
        console.log(currentProgressBtn);
        currentProgressBtn.forEach((e) => {
            e.addEventListener("click", function () {
                this.previousElementSibling.placeholder =
                    this.previousElementSibling.value;
            });
        });
    }
    getCurentTime() {
        const date = new Date();
        this.currentTime = `${date.getHours()}:${date.getMinutes()}`;
        console.log(this.currentTime);
    }
    displayGreeting() {
        greetingName.textContent = "";
        greetingName.textContent = this.userName;
        currentTimeContainer.textContent = "";
        currentTimeContainer.textContent = this.currentTime;
    }
    updateProjectsReview() {
        ongoingProjects.textContent = "";
        completedProjects.textContent = "";
        ongoingProjects.textContent = `${this.ongoingProjects.length}`;
        completedProjects.textContent = `${this.compledtedProjects.length}`;
    }
    renderOngoingProject() {
        const ongoingProjectsList_container = document.querySelector(
            ".ongoing_projects_list_container"
        );
        // ongoingProjectsList_container.textContent = "";
        this.ongoingProjects.forEach((project) => {
            const content = `
        <div class="ongoing_projects_list_item">
                                    <p class="project_title">
                                        Project Title: ${project.title}
                                    </p>
                                    <div
                                        class="project_item project_resources_container"
                                    >
                                        <p>Resouces:</p>
                                        <div
                                            class="resources_value_container project_resources"
                                        >
                                        ${project.resources
                                            .map((resource) => {
                                                return `<span class="project_resource">
                                                ${resource}
                                            </span>`;
                                            })
                                            .join("")}
                                            
                                        </div>
                                    </div>
                                    <div
                                        class="project_item project_pernonnel_container"
                                    >
                                        <p>Project Personnel(s): </p>
                                        <span
                                            class="project_value_container project_key_value"
                                            >${project.personnel}</span
                                        >
                                    </div>
                                    <div
                                        class="project_item project_site_area_container"
                                    >
                                        <p>Project Site Area:</p>
                                        <span
                                            class="project_value_container project_key_value"
                                            >${project.siteArea}</span
                                        >
                                    </div>
                                    <div
                                        class="project_item project_date_initiation_container"
                                    >
                                        <p>Project Initiation Date:</p>
                                        <span
                                            class="project_value_container project_key_value"
                                            >${project.initiationDate}</span
                                        >
                                    </div>
                                    <div
                                        class="project_item project_state_container"
                                    >
                                        <div class="project_state_left">
                                            <p>Project Current State:</p>
                                        </div>
                                        <div class="project_key_value">
                                            <span
                                                class="project_value_container project_state_right"
                                                ><input
                                                    class="currrent_progress_tab"
                                                    type="text"
                                                    placeholder="${
                                                        project.currentState
                                                    }"
                                                    name=""
                                                    id="" />
                                                <img
                                                    class="arrow_icon current_progress_btn"
                                                    src="assets/icons/arrow.svg"
                                                    alt=""
                                            /></span>
                                        </div>
                                    </div>
                                </div>
        `;
            ongoingProjectsList_container.insertAdjacentHTML(
                "beforeend",
                content
            );
        });
    }
}
