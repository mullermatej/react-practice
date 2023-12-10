import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton.jsx';

function App() {
    function handleSelect() {
        console.log('HELLO world! -selected');
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleSelect}>Components</TabButton>
                        <TabButton onSelect={handleSelect}>JSX</TabButton>
                        <TabButton onSelect={handleSelect}>Props</TabButton>
                        <TabButton onSelect={handleSelect}>State</TabButton>
                    </menu>
                    <h2>Dynamic content</h2>
                </section>
            </main>
        </div>
    );
}

export default App;
