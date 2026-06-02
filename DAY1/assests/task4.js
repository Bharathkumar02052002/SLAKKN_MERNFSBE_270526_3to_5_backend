const company = "SLA";

const level1 = () => {

    const trainer = "MUKUNDH";

    const level2 = () => {

        const batch = "MERN";

        const level3 = () => {

            console.log(company);
            console.log(trainer);
            console.log(batch);
        };

        level3();
    };

    level2();
};

level1();