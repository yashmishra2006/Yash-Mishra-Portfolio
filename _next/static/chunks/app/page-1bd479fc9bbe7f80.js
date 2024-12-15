(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        8350: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 210))
        },
        210: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var s = a(7437),
                i = a(2265),
                n = a(6648),
                r = () => (0, s.jsxs)("header", {
                    children: [(0, s.jsx)("div", {
                        className: "mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full",
                        children: (0, s.jsx)(n.default, {
                            src: "/profile-image.jpg",
                            alt: "Yash Mishra",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }), (0, s.jsx)("h1", {
                        className: "text-4xl font-bold mb-2",
                        children: "Yash Mishra"
                    }), (0, s.jsx)("h2", {
                        className: "text-xl text-gray-400 mb-4",
                        children: "Web and Cloud Developer"
                    }), (0, s.jsx)("h3", {
                        className: "text-lg text-gray-400 mb-4",
                        children: "\uD83D\uDCCD New Delhi, India "
                    }), (0, s.jsx)("p", {
                        className: "text-gray-300 text-sm",
                        children: "Building Real Products For Real Clients, Not Just More Projects"
                    })]
                });
            let o = e => {
                let t = new Date,
                    a = t.getFullYear() - e.getFullYear(),
                    s = t.getMonth() - e.getMonth();
                return (s < 0 || 0 === s && t.getDate() < e.getDate()) && a--, a
            };
            var l = () => {
                let e = o(new Date(2006, 2, 23));
                return (0, s.jsxs)("section", {
                    id: "about",
                    className: "mb-8",
                    children: [(0, s.jsx)("h2", {
                        className: "text-3xl font-bold mb-6 text-gray-100",
                        children: "About Me"
                    }), (0, s.jsxs)("p", {
                        className: "text-gray-300 mb-4",
                        children: ["I'm a ", e, "-year-old experienced Web and Cloud Developer with a knack for building products that make a difference. My expertise spans both frontend and cloud technologies, enabling me to craft comprehensive solutions from the ground up."]
                    }), (0, s.jsx)("p", {
                        className: "text-gray-300 mb-4",
                        children: "Throughout my career, I've been deeply involved in the startup ecosystem."
                    }), (0, s.jsx)("p", {
                        className: "text-gray-300 mb-4",
                        children: "During my high school years, I excelled in software development . This early achievement laid the foundation for my passion and expertise in programming."
                    }), (0, s.jsx)("p", {
                        className: "text-gray-300 mb-6",
                        children: "When I'm not immersed in code, you'll find me experimenting in the kitchen or bringing ideas to life. I'm always creating, whether it's digital products or tangible objects."
                    })]
                })
            };
            let c = {
                    languages: {
                        bg: "bg-blue-500",
                        text: "text-blue-500"
                    },
                    frameworks: {
                        bg: "bg-green-500",
                        text: "text-green-500"
                    },
                    backend: {
                        bg: "bg-purple-500",
                        text: "text-purple-500"
                    },
                    databases: {
                        bg: "bg-red-500",
                        text: "text-red-500"
                    },
                    practices: {
                        bg: "bg-yellow-500",
                        text: "text-yellow-500"
                    }
                },
                d = e => {
                    let {
                        text: t,
                        category: a
                    } = e, {
                        bg: i,
                        text: n
                    } = c[a];
                    return (0, s.jsx)("span", {
                        className: "inline-block ".concat(i, " bg-opacity-30 px-3 py-1.5 text-xs font-medium ").concat(n, " mr-2 mb-2 rounded-full"),
                        children: t
                    })
                },
                m = e => {
                    let {
                        items: t,
                        category: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "flex flex-wrap",
                        children: t.map((e, t) => (0, s.jsx)(d, {
                            text: e,
                            category: a
                        }, t))
                    })
                },
                h = {
                    languages: ["JavaScript", "Python", "C++", "C#"],
                    frameworks: ["ReactJS", "React Native", "Flask"],
                    backend: ["Node.js", ".NET", "REST APIs", "Microservices"],
                    databases: ["Postgres", "SQL", "MongoDB", "Elasticsearch"],
                    practices: ["Microservices", "Microfrontend", "Git"]
                };
            var p = () => (0, s.jsxs)("div", {
                children: [(0, s.jsx)("h2", {
                    className: "text-3xl font-bold mb-6 text-gray-100",
                    children: "Skills"
                }), Object.entries(h).map(e => {
                    let [t, a] = e;
                    return (0, s.jsxs)("div", {
                        className: "mb-4",
                        children: [(0, s.jsx)("h4", {
                            className: "text-xl font-semibold mb-2 text-gray-200 capitalize",
                            children: t
                        }), (0, s.jsx)(m, {
                            items: a,
                            category: t
                        })]
                    }, t)
                })]
            });
            let x = [{
                title: "Cloud Team Developer",
                company: "SDC USICT",
                location: "Dwarka, New Delhi",
                period: "August 2024 - Present",
                description: ["Have become an integral part of the SDC Club at my university."],
                logo: "/shifti.png",
                skills: ["NextJS", "React Native", "Expo", "Machine Learning",]
            }
    ];
            var g = () => (0, s.jsxs)("section", {
                    id: "experience",
                    className: "mb-12",
                    children: [(0, s.jsx)("h2", {
                        className: "text-3xl font-bold mb-6 text-gray-100",
                        children: "Experience"
                    }), (0, s.jsx)("div", {
                        className: "space-y-6",
                        children: x.map((e, t) => (0, s.jsxs)("div", {
                            className: "relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-start mb-2",
                                children: [(0, s.jsx)("div", {
                                    className: "bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden",
                                    children: (0, s.jsx)(n.default, {
                                        src: e.logo,
                                        alt: "".concat(e.company, " logo"),
                                        width: 40,
                                        height: 40,
                                        className: "object-contain"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex-grow",
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-2xl font-semibold text-gray-100",
                                        children: e.title
                                    }), (0, s.jsxs)("p", {
                                        className: "text-lg text-gray-300",
                                        children: [e.company, ", ", e.location]
                                    }), (0, s.jsx)("p", {
                                        className: "text-gray-400",
                                        children: e.period
                                    })]
                                })]
                            }), (0, s.jsx)("ul", {
                                className: "space-y-2 text-gray-300 mb-4",
                                children: e.description.map((e, t) => (0, s.jsxs)("li", {
                                    className: "flex items-start",
                                    children: [(0, s.jsx)("span", {
                                        className: "mr-2 mt-1.5 text-gray-500",
                                        children: "•"
                                    }), (0, s.jsx)("span", {
                                        children: e
                                    })]
                                }, t))
                            }), (0, s.jsx)(m, {
                                items: e.skills,
                                category: "frameworks"
                            })]
                        }, t))
                    })]
                }),
                u = a(1942);
            let b = [{
                name: "HomeGame: Home Poker Analytics Manager",
                description: ["Developed a feature-rich mobile application for managing and analyzing home poker games using React Native and Supabase", "Created an advanced analytics engine providing insights into gameplay, win rates, and improvement areas", "Implemented offline mode with data synchronization and integrated third-party APIs for odds calculation"],
                technologies: ["Supabase", "React Native", "Expo"],
                image: "/homegame-project.jpg",
                githubLink: "https://github.com/yourusername/homegame",
                liveLink: "https://homegame-app.com"
            }, {
                name: "BrewPoints: Cafe Loyalty App",
                description: ["Developed a full-stack loyalty app solution for independent cafes, featuring React Native mobile apps, Node.js backend with GraphQL API, and MongoDB database", "Integrated with various Point of Sale (POS) systems using a flexible adapter pattern", "Implemented real-time order tracking and notifications using Socket.io", "Designed a customizable loyalty program system with analytics dashboard for cafe owners"],
                technologies: ["React Native", "Expo", "Node.js", "GraphQL", "MongoDB"],
                image: "/cafe-loyalty-project.jpg",
                githubLink: "https://github.com/yourusername/cafe-loyalty",
                liveLink: "https://cafeloyalty-demo.com"
            }, {
                name: "FitQuest: Interactive Workout Companion",
                description: ["Built a gamified workout application to make fitness routines more engaging", "Designed personalized workout plans based on user goals and fitness levels", "Implemented progress tracking and achievement system to boost user motivation", "Integrated with wearable devices for real-time workout data synchronization"],
                technologies: ["React Native", "Firebase", "TensorFlow.js"],
                image: "/fitquest-project.jpg",
                githubLink: "https://github.com/yourusername/fitquest",
                liveLink: "https://fitquest-demo.com"
            }, {
                name: "Collectify: Personal Collections Manager",
                description: ["Developed a versatile app for creating and managing personal collections", "Implemented features for adding, categorizing, and tagging items within collections", "Created a search and filter system for easy navigation of large collections", "Designed a user-friendly interface for seamless collection management"],
                technologies: ["React", "Redux", "Node.js", "MongoDB"],
                image: "/collectify-project.jpg",
                githubLink: "https://github.com/yourusername/collectify",
                liveLink: "https://collectify-demo.com"
            }];
            var f = () => (0, s.jsxs)("section", {
                    id: "projects",
                    className: "mb-12",
                    children: [(0, s.jsx)("h2", {
                        className: "text-3xl font-bold mb-6 text-gray-100",
                        children: "Projects"
                    }), (0, s.jsx)("ul", {
                        className: "space-y-12",
                        children: b.map((e, t) => (0, s.jsx)("li", {
                            className: "relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col md:flex-row",
                                children: [(0, s.jsx)("div", {
                                    className: "md:w-1/3 mb-4 md:mb-0 md:mr-6",
                                    children: (0, s.jsx)(n.default, {
                                        src: e.image,
                                        alt: e.name,
                                        width: 300,
                                        height: 200,
                                        className: "rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "md:w-2/3",
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-2xl font-semibold mb-3 text-gray-100",
                                        children: e.name
                                    }), (0, s.jsx)("ul", {
                                        className: "space-y-2 text-gray-300 mb-4",
                                        children: e.description.map((e, t) => (0, s.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0, s.jsx)("span", {
                                                className: "mr-2 mt-1.5 text-gray-500",
                                                children: "•"
                                            }), (0, s.jsx)("span", {
                                                children: e
                                            })]
                                        }, t))
                                    }), (0, s.jsx)(m, {
                                        items: e.technologies,
                                        category: "frameworks"
                                    }), (0, s.jsxs)("div", {
                                        className: "flex space-x-4 mt-4",
                                        children: [e.githubLink && (0, s.jsxs)("a", {
                                            href: e.githubLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center text-gray-300 hover:text-white transition-colors duration-300",
                                            children: [(0, s.jsx)(u.hJX, {
                                                className: "mr-2"
                                            }), (0, s.jsx)("span", {
                                                children: "View Code"
                                            })]
                                        }), e.liveLink && (0, s.jsxs)("a", {
                                            href: e.liveLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center text-gray-300 hover:text-white transition-colors duration-300",
                                            children: [(0, s.jsx)(u.CkN, {
                                                className: "mr-2"
                                            }), (0, s.jsx)("span", {
                                                children: "Live Demo"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }, t))
                    })]
                }),
                j = a(3872),
                y = () => (0, s.jsxs)("a", {
                    href: "/Yash Mishra Resume.pdf",
                    download: !0,
                    className: "flex items-center bg-[#111111] hover:bg-white text-white hover:text-[#111111] px-3 py-1 rounded transition duration-300 mr-4 border border-white",
                    children: [(0, s.jsx)(u.ZJh, {
                        size: 18,
                        className: "mr-2"
                    }), "Resume"]
                }),
                v = () => (0, s.jsxs)("div", {
                    className: "flex space-x-3 items-center",
                    children: [(0, s.jsx)(y, {}), (0, s.jsx)("a", {
                        href: "https://github.com/yashmishra2006",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white",
                        children: (0, s.jsx)(u.hJX, {
                            size: 24
                        })
                    }), (0, s.jsx)("a", {
                        href: "mailto:yash.48725095@gmail.com",
                        className: "text-gray-400 hover:text-white",
                        children: (0, s.jsx)(u.SRX, {
                            size: 24
                        })
                    }), (0, s.jsx)("a", {
                        href: "https://www.linkedin.com/in/yash-mishra-27b75a1a7/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white",
                        children: (0, s.jsx)(u.ltd, {
                            size: 24
                        })
                    }), (0, s.jsx)("a", {
                        href: "https://www.instagram.com/__yash.mishra___",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white",
                        children: (0, s.jsx)(u.Zf_, {
                            size: 24
                        })
                    }), (0, s.jsx)("a", {
                        href: "https://twitter.com/yashmis64344013",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white",
                        children: (0, s.jsx)(j.LCd, {
                            size: 24
                        })
                    })]
                });
            let N = [{
                degree: "Bachelor of Computer Science",
                university: "Guru Gobind Singh Indraprasta University",
                period: "July 2024 - Present",
                image: "/deakin-university-logo.png",
                units: ["SIT232 Object-Oriented Development", "SIT292 Linear Algebra for Data Analytics", "SIT223 Proffessional Practice in I.T.", "SIT221 Data Structures & Algorithms", "SIT215 Computational Intelligence", "SIT202 Computer Networks", "SIT320 Advanced Algorithms", "SIT306 IT Placement", "SIT374 Project Design", "SIT216 User Centered Design", "SIT305 Mobile Application Development", "SIT331 Full Stack Development: Secure Backend Services", "SIT378 Team Project(B)", "SIT315 Concurrent & Distributed Programming", "SIT120 Introduction to Responsive Web Apps", "SIT313 Full Stack Development: Secure Frontend Applications"]
            }];
            var w = () => (0, s.jsxs)("section", {
                    id: "education",
                    className: "mb-12",
                    children: [(0, s.jsx)("h2", {
                        className: "text-3xl font-bold mb-6 text-gray-100",
                        children: "Education"
                    }), (0, s.jsx)("ul", {
                        className: "space-y-6",
                        children: N.map((e, t) => (0, s.jsx)("li", {
                            className: "relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-start mb-2",
                                children: [(0, s.jsx)("div", {
                                    className: "bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden",
                                    children: (0, s.jsx)(n.default, {
                                        src: e.image,
                                        alt: "".concat(e.university, " logo"),
                                        width: 80,
                                        height: 80,
                                        className: "object-contain w-12 h-12 sm:w-20 sm:h-20"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex-grow",
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-xl sm:text-2xl font-semibold text-gray-100",
                                        children: e.degree
                                    }), (0, s.jsx)("p", {
                                        className: "text-base sm:text-lg text-gray-300",
                                        children: e.university
                                    }), (0, s.jsx)("p", {
                                        className: "text-sm sm:text-base text-gray-400",
                                        children: e.period
                                    }), (0, s.jsxs)("details", {
                                        className: "mt-2",
                                        children: [(0, s.jsxs)("summary", {
                                            className: "cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 flex items-center",
                                            children: [(0, s.jsx)(u.RiI, {
                                                className: "mr-2 inline-block details-open:hidden"
                                            }), (0, s.jsx)(u.s$2, {
                                                className: "mr-2 hidden details-open:inline-block"
                                            }), (0, s.jsx)("span", {
                                                children: "View Units"
                                            })]
                                        }), (0, s.jsx)("ul", {
                                            className: "mt-4 ml-4 space-y-2",
                                            children: e.units.map((e, t) => (0, s.jsxs)("li", {
                                                className: "text-gray-300",
                                                children: ["• ", e]
                                            }, t))
                                        })]
                                    })]
                                })]
                            })
                        }, t))
                    })]
                }),
                k = () => (0, s.jsx)("footer", {
                    className: " text-gray-300 py-6 mt-12",
                    children: (0, s.jsx)("div", {
                        className: "container mx-auto px-4",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col items-end justify-center",
                            children: [(0, s.jsx)("p", {
                                className: "text-sm",
                                children: "Designed and built by Yash Mishra"
                            }), (0, s.jsxs)("p", {
                                className: "text-xs mt-2",
                                children: ["\xa9 ", new Date().getFullYear(), " All rights reserved"]
                            })]
                        })
                    })
                }),
                D = a(9591);

            function S() {
                let [e, t] = (0, i.useState)(!1), [a, n] = (0, i.useState)({
                    name: "",
                    email: "",
                    company: "",
                    projectDetails: ""
                }), r = async e => {
                    e.preventDefault();
                    try {
                        if (!(await fetch("/api/send-email", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(a)
                            })).ok) throw Error("Failed to send email");
                        t(!1), n({
                            name: "",
                            email: "",
                            company: "",
                            projectDetails: ""
                        })
                    } catch (e) {
                        console.error("Error sending email:", e), alert("Failed to send enquiry. Please try again.")
                    }
                };
                return (0, s.jsxs)("section", {
                    className: "mb-16",
                    children: [(0, s.jsx)("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Want to Work Together?"
                    }), (0, s.jsx)(D.E.button, {
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        onClick: () => t(!0),
                        className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors",
                        children: "Click here to enquire"
                    }), e && (0, s.jsx)("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                        children: (0, s.jsxs)(D.E.div, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .9
                            },
                            className: "bg-[#1a1a1a] p-8 rounded-xl max-w-md w-full",
                            children: [(0, s.jsx)("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Tell me about your project"
                            }), (0, s.jsxs)("form", {
                                onSubmit: r,
                                className: "space-y-4",
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("label", {
                                        htmlFor: "name",
                                        className: "block text-sm mb-2",
                                        children: "Name"
                                    }), (0, s.jsx)("input", {
                                        type: "text",
                                        id: "name",
                                        value: a.name,
                                        onChange: e => n({
                                            ...a,
                                            name: e.target.value
                                        }),
                                        className: "w-full p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none",
                                        required: !0
                                    })]
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("label", {
                                        htmlFor: "email",
                                        className: "block text-sm mb-2",
                                        children: "Email"
                                    }), (0, s.jsx)("input", {
                                        type: "email",
                                        id: "email",
                                        value: a.email,
                                        onChange: e => n({
                                            ...a,
                                            email: e.target.value
                                        }),
                                        className: "w-full p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none",
                                        required: !0
                                    })]
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("label", {
                                        htmlFor: "company",
                                        className: "block text-sm mb-2",
                                        children: "Company (optional)"
                                    }), (0, s.jsx)("input", {
                                        type: "text",
                                        id: "company",
                                        value: a.company,
                                        onChange: e => n({
                                            ...a,
                                            company: e.target.value
                                        }),
                                        className: "w-full p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("label", {
                                        htmlFor: "projectDetails",
                                        className: "block text-sm mb-2",
                                        children: "Project Details"
                                    }), (0, s.jsx)("textarea", {
                                        id: "projectDetails",
                                        value: a.projectDetails,
                                        onChange: e => n({
                                            ...a,
                                            projectDetails: e.target.value
                                        }),
                                        className: "w-full p-2 rounded bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:outline-none",
                                        rows: 4,
                                        required: !0
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex gap-4 justify-end mt-6",
                                    children: [(0, s.jsx)("button", {
                                        type: "button",
                                        onClick: () => t(!1),
                                        className: "px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors",
                                        children: "Cancel"
                                    }), (0, s.jsx)("button", {
                                        type: "submit",
                                        className: "px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors",
                                        children: "Send Enquiry"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }

            function I() {
                let e = {
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: .2
                            }
                        }
                    },
                    t = {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .5
                            }
                        }
                    };
                return (0, s.jsxs)("div", {
                    className: "min-h-screen bg-[#111111] text-white",
                    children: [(0, s.jsxs)("div", {
                        className: "lg:hidden",
                        children: [(0, s.jsxs)(D.E.main, {
                            variants: e,
                            initial: "hidden",
                            animate: "visible",
                            className: "p-6 max-w-screen-sm mx-auto",
                            children: [(0, s.jsxs)(D.E.div, {
                                variants: t,
                                className: "mb-6",
                                children: [(0, s.jsx)(r, {}), (0, s.jsx)("div", {
                                    className: "mt-6",
                                    children: (0, s.jsx)(v, {})
                                }), (0, s.jsx)("div", {
                                    className: "mt-6",
                                    children: (0, s.jsx)(S, {})
                                })]
                            }), (0, s.jsx)(D.E.div, {
                                variants: t,
                                children: (0, s.jsx)(l, {})
                            }), (0, s.jsx)(D.E.div, {
                                variants: t,
                                children: (0, s.jsx)(p, {})
                            }), (0, s.jsx)(D.E.div, {
                                variants: t,
                                children: (0, s.jsx)(g, {})
                            }), (0, s.jsx)(D.E.div, {
                                variants: t,
                                children: (0, s.jsx)(w, {})
                            }), (0, s.jsx)(D.E.div, {
                                variants: t,
                                children: (0, s.jsx)(f, {})
                            })]
                        }), (0, s.jsx)(k, {})]
                    }), (0, s.jsxs)("div", {
                        className: "hidden lg:flex flex-col xl:flex-row",
                        children: [(0, s.jsx)(D.E.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8
                            },
                            className: "xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]",
                            children: (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(r, {}), (0, s.jsx)("div", {
                                    className: "mt-6",
                                    children: (0, s.jsx)(v, {})
                                }), (0, s.jsx)("div", {
                                    className: "mt-6",
                                    children: (0, s.jsx)(S, {})
                                })]
                            })
                        }), (0, s.jsxs)(D.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .8,
                                delay: .3
                            },
                            className: "xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto",
                            children: [(0, s.jsxs)(D.E.main, {
                                variants: e,
                                initial: "hidden",
                                animate: "visible",
                                className: "p-8 xl:p-12 xl:pr-[10%]",
                                children: [(0, s.jsx)(D.E.div, {
                                    variants: t,
                                    children: (0, s.jsx)(l, {})
                                }), (0, s.jsx)(D.E.div, {
                                    variants: t,
                                    children: (0, s.jsx)(p, {})
                                }), (0, s.jsx)(D.E.div, {
                                    variants: t,
                                    children: (0, s.jsx)(g, {})
                                }), (0, s.jsx)(D.E.div, {
                                    variants: t,
                                    children: (0, s.jsx)(w, {})
                                }), (0, s.jsx)(D.E.div, {
                                    variants: t,
                                    children: (0, s.jsx)(f, {})
                                })]
                            }), (0, s.jsx)(k, {})]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [240, 699, 642, 971, 23, 744], function() {
            return e(e.s = 8350)
        }), _N_E = e.O()
    }
]);