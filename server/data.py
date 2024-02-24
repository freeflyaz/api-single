import re
import json

# Your text data
data = """
Frage №1: In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …
— hier Religionsfreiheit gilt.
— die Menschen Steuern zahlen.
— die Menschen das Wahlrecht haben.
— hier Meinungsfreiheit gilt.
Frage №2: In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …
— Geschichtsunterricht teilnimmt.
— Religionsunterricht teilnimmt.
— Politikunterricht teilnimmt.
— Sprachunterricht teilnimmt.
Frage №3: Deutschland ist ein Rechtsstaat. Was ist damit gemeint?
— Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.
— Der Staat muss sich nicht an die Gesetze halten.
— Nur Deutsche müssen die Gesetze befolgen.
— Die Gerichte machen die Gesetze.
Frage №4: Welches Recht gehört zu den Grundrechten in Deutschland?
— Waffenbesitz
— Faustrecht
— Meinungsfreiheit
— Selbstjustiz
Frage №5: Wahlen in Deutschland sind frei. Was bedeutet das?
— Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.
— Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.
— Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.
— Alle wahlberechtigten Personen müssen wählen.

Frage №6: Wie heißt die deutsche Verfassung?
— Volksgesetz
— Bundesgesetz
— Deutsches Gesetz
— Grundgesetz
Frage №7: Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …
— Glaubens- und Gewissensfreiheit
— Unterhaltung
— Arbeit
— Wohnung
Frage №8: Was steht nicht im Grundgesetz von Deutschland?
— Die Würde des Menschen ist unantastbar.
— Alle sollen gleich viel Geld haben.
— Jeder Mensch darf seine Meinung sagen.
— Alle sind vor dem Gesetz gleich.
Frage №9: Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf …
— Schutz der Familie
— Menschenwürde
— Asyl
— Meinungsfreiheit
Frage №10: Was ist mit dem deutschen Grundgesetz vereinbar?
— die Prügelstrafe
— die Folter
— die Todesstrafe
— die Geldstrafe
Frage №11: Wie wird die Verfassung der Bundesrepublik Deutschland genannt?
— Grundgesetz
— Bundesverfassung
— Gesetzbuch
— Verfassungsvertrag
Frage №12: Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?
— Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.
— Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.
— Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.
— Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.
Frage №13: Im Parlament steht der Begriff „Opposition“ für…
— die regierenden Parteien.
— alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.
— die Fraktion mit den meisten Abgeordneten.
— alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.
Frage №14: Meinungsfreiheit in Deutschland heißt, dass ich …
— Passanten auf der Straße beschimpfen darf.
— meine Meinung in Leserbriefen äußern kann.
— Nazi-Symbole tragen darf.
— meine Meinung sagen darf, solange ich der Regierung nicht widerspreche.

Frage №15: Was verbietet das deutsche Grundgesetz?
— Militärdienst
— Zwangsarbeit
— freie Berufswahl
— Arbeit im Ausland
Frage №16: Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?
— bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen
— bei Meinungsäußerungen über die Bundesregierung
— bei Diskussionen über Religionen
— bei Kritik am Staat
Frage №17: Die deutschen Gesetze verbieten …
— Meinungsfreiheit der Einwohner und Einwohnerinnen.
— Petitionen der Bürger und Bürgerinnen.
— Versammlungsfreiheit der Einwohner und Einwohnerinnen.
— Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat.
Frage №18: Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?
— die Unantastbarkeit der Menschenwürde
— das Recht auf Leben
— Religionsfreiheit
— Meinungsfreiheit
Frage №19: Was versteht man unter dem Recht der „Freizügigkeit“ in Deutschland?
— Man darf sich seinen Wohnort selbst aussuchen.
— Man kann seinen Beruf wechseln.
— Man darf sich für eine andere Religion entscheiden.
— Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.
Frage №20: Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …
— tolerant.
— rechtsstaatlich orientiert.
— gesetzestreu.
— verfassungswidrig.
Frage №21: Welches ist das Wappen der Bundesrepublik Deutschland?
Vier Symbole: 1) einköpfiger Adler auf einem (gelben) Schild. 2) Zwei vereinigte Symbole. 3) stilisiertes Tatzenkreuz. 4) Ährenkranz mit Hammer und Zirkel
— 1
— 2
— 3
— 4

Frage №22: Was für eine Staatsform hat Deutschland?
— Monarchie
— Diktatur
— Republik
— Fürstentum
Frage №23: In Deutschland sind die meisten Erwerbstätigen …
— bei einer Firma oder Behörde beschäftigt.
— in kleinen Familienunternehmen beschäftigt.
— ehrenamtlich für ein Bundesland tätig.
— selbständig mit einer eigenen Firma tätig.
Frage №24: Wie viele Bundesländer hat die Bundesrepublik Deutschland?
— 14
— 15
— 16
— 17
Frage №25: Was ist kein Bundesland der Bundesrepublik Deutschland?
— Nordrhein-Westfalen
— Elsass-Lothringen
— Mecklenburg-Vorpommern
— Sachsen-Anhalt
Frage №26: Deutschland ist …
— eine kommunistische Republik.
— ein demokratischer und sozialer Bundesstaat.
— eine kapitalistische und soziale Monarchie.
— ein sozialer und sozialistischer Bundesstaat.
Frage №27: Deutschland ist …
— ein sozialistischer Staat.
— ein Bundesstaat.
— eine Diktatur.
— eine Monarchie.
Frage №28: Wer wählt in Deutschland die Abgeordneten zum Bundestag?
— das Militär
— die Wirtschaft
— das wahlberechtigte Volk
— die Verwaltung
Frage №29: Welches Tier ist das Wappentier der Bundesrepublik Deutschland?
— Löwe
— Adler
— Bär
— Pferd
Frage №30: Was ist kein Merkmal unserer Demokratie?
— regelmäßige Wahlen
— Pressezensur
— Meinungsfreiheit
— verschiedene Parteien
"""

# Adjusted pattern to ignore correct answer identification
pattern = r'Frage №(\d+): (.*?)\n— (.*?)\n— (.*?)\n— (.*?)\n(?:— (.*?)\n)?'
matches = re.findall(pattern, data, re.DOTALL)

print(f"Found {len(matches)} matches.")

questions = []
for match in matches:
    order, name, answerA, answerB, answerC, answerD = match[:6]  # Extract answers directly, assuming optional D

    question = {
        "order": int(order),
        "name": name.strip(),
        "answerA": answerA.strip(),
        "answerB": answerB.strip(),
        "answerC": answerC.strip(),
        "answerD": answerD.strip() if answerD else "",  # Include D if present
        "correct": "A"  # Assume correct answer is always A
    }
    questions.append(question)

json_data = json.dumps(questions, indent=2, ensure_ascii=False)
print(json_data)
