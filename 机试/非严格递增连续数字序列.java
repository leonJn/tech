
		// 输入一个字符串仅包含大小写字母和数字，求字符串中包含的非严格递增连续数字序列的长度（比如12234属于非严格递增连续数字序列）
		// 示例：
		// 输入 abc22234019A334bc
		// 输出 4


		public static void maxNumArr(String a) {
      char[] arr=a.toCharArray();
      char[] tmp=new char[255];
      char[] tmp1=new char[255];
      int j=0;
      int k=0;
      //遍历
      for (int i = 0; i <arr.length; i++) {

      //tmp读取数字串
          if (arr[i]>='0'&&arr[i]<='9') {
              tmp[j] = arr[i];
              j++;

      //一段数字串读取完毕时
              if ((i == arr.length - 1) ||
                (arr[i + 1] >= 'a' && arr[i + 1] <= 'z')) {
                  if (j > k) {	 //判断数字串的大小
                      for (int l = 0; l < j; l++) {
                          tmp1[l] = tmp[l];
                      }
                      k = j;	//新的tmp1的大小
                  }
                  j = 0;//tmp置零
              }
          }
      }

      //	输出结果
      for (int i = 0; i <k ; i++) {
          System.out.print(tmp1[i]);
      }

  }
