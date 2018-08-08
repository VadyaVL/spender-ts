import { AsyncStorage } from 'react-native';

import { Category } from '../../common/interfaces';

const prefix = '@spender:';
const CATEGORY_KEY = `${prefix}category`;
const CATEGORIES_KEY = `${prefix}categories`;

export const saveTestCategory = async (): Promise<void> => {
  try {
    const loaded: Category[] = [
      {
        id: 1,
        title: 'Проїзд',
        icon: 0,
        value: 0,
      },
      {
        id: 2,
        title: 'Інше',
        icon: 0,
        value: 0,
      },
      {
        id: 3,
        title: 'Продукти',
        icon: 0,
        value: 0,
      },
      {
        id: 4,
        title: 'Зовнішність',
        icon: 0,
        value: 0,
      },
      {
        id: 5,
        title: 'TEST_01',
        icon: 0,
        value: 0,
      },
      {
        id: 6,
        title: 'MEDIUM_TEST_01',
        icon: 0,
        value: 0,
      },
    ];
    // const dictonary = loaded.map((category) => [`${CATEGORY_KEY}_${category.id}`, JSON.stringify(category)]);

    // return await AsyncStorage.multiSet(dictonary);
    return await AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(loaded));
  } catch (error) {
    // Error saving data
  }
};

/**
 * Redo: must be optimized
 * @param category
 */
export const saveCategory = async (category: Category): Promise<boolean> => {
  try {
    const jsonData = await AsyncStorage.getItem(CATEGORIES_KEY);
    const array: Category[] = jsonData ? JSON.parse(jsonData) : [];
    await AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify([...array, category]));
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    return JSON.parse(await AsyncStorage.getItem(CATEGORIES_KEY));
  } catch (error) {
    // Error saving data
  }

  return [];
};
