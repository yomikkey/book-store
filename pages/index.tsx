import Layout from "../pages/styling-components/Layout";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import { DataStore } from "../stores/DataStore";

type Props = {
    dataStore?: DataStore;
};

const IndexPage: NextPage = inject("dataStore")(
    observer((props: Props) => {
    const dataStore = props.dataStore!;

    console.log(dataStore);
    
        return (
            // <Layout title="Home | Next.js + TypeScript Example">
            //     <h1>My first Medium article</h1>
            //     <p>{dataStore.title} 👋</p>
            //     <input
            //         type="text"
            //         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //             dataStore.changeTitle(e.target.value)
            //         }
            //     />
            // </Layout>
            <div>
                {dataStore.title}
            </div>
        );
    })
);
export default IndexPage