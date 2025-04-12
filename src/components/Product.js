import styles from '../styles/Product.module.css';

const Product = () => {
    return (
        <section className={styles.section} id={"product"}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2><strong>Moderní obojek pro psy</strong></h2>
                    <p>
                        <strong>TailTracker</strong> sleduje polohu vašeho psa v reálném čase, umožňuje nastavit
                        <strong> bezpečnou zónu</strong> (virtuální plot) a pečlivě monitoruje jeho
                        <strong> aktivitu, spánek i zdraví</strong>.
                    </p>
                    <p>
                        Pokud se pes ztratí, snadno ho najdete díky <strong>GPS poloze</strong> přímo ve svém telefonu.
                        A když ho najde někdo jiný? Stačí přiložit jakýkoli <strong>chytrý telefon</strong> k obojku –
                        okamžitě se mu zobrazí kontaktní a zdravotní informace, které jste nastavili.
                    </p>
                </div>

                <div className={styles.image}>
                    <img src="/images/TailTracker_Collar.png" alt="TailTracker obojek"/>
                </div>
            </div>
        </section>
    );
};

export default Product;