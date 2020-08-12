import React from 'react';
import { AsyncStorage } from '@react-native-community/async-storage'
import R from 'ramda'
import ThaiWord from './th';
import EnglishWord from './en';
import moment from 'moment'
import 'moment/locale/th'

export const LanguageContext = React.createContext();

export const languages = {
  th: {
    title: 'th',
    word: ThaiWord,
  },
  en: {
    title: 'en',
    word: EnglishWord,
  },
};

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: languages.th.title,
      word: languages.th.word,
    };
  }

  componentDidMount() {
    this.init()
  }

  init = async () => {
    try {
      const value = await AsyncStorage.getItem('@language')
      this.setState({
        language: R.isNil(value) ? languages.en.title : value,
        word: R.isNil(value) ? languages.en.word : languages[value].word,
      })
    } catch {
      this.setState({
        language: languages.en.title,
        word: languages.en.word,
      })
    }
  }

  updateLanguage = async (e) => {
    this.setState({
      language: languages[e].title,
      word: languages[e].word,
    });
    moment.locale(languages[e].title)
    await AsyncStorage.setItem('@language', languages[e].title);
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          word: this.state.word,
          updateLanguage: this.updateLanguage,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContext;
