const grandParent = () => {

    const familyName = "Bharath Family";

    const parent = () => {

        const fatherName = "Kumar";

        const child = () => {

            const childName = "Rahul";

            console.log(familyName);
            console.log(fatherName);
            console.log(childName);
        };

        child();
    };

    parent();
};

grandParent();